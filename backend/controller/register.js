const express = require("express")
const poolData = require("../configDatabase")
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/register', async(req, res, next) => {
    const user = req.body
    const hashRound = 10
    const addCusScript = `INSERT INTO CUSTOMER(customer_fname, customer_lname, customer_address, customer_email, customer_tel) VALUES (?, ?, ?, ?, ?);`
    const findIdCusScript = `SELECT customer_id FROM CUSTOMER WHERE customer_fname = ? AND customer_lname = ?` 
    const addAccountScript = `INSERT INTO ACCOUNTS (username, password, CUSTOMER_customer_id) VALUES (?, ?, ?)`
    const connection = await poolData.getConnection()
    await connection.beginTransaction()
    try{
        const checkAccount = await connection.query("SELECT customer_email FROM CUSTOMER WHERE customer_email=?", [user.customer.email])
        console.log(checkAccount[0])
        console.log(user.account.username)
        if( checkAccount[0].length > 0 ) { 
            res.json({massage : "This email already registered"}) 
            return console.log("User has regis Duplicate Account")
        }
        else{ 
            await connection.query(addCusScript, [user.customer.fname, user.customer.lname, user.customer.address, user.customer.email, user.customer.tel])
            await bcrypt.hash(user.account.password, hashRound, async function(err, hash) {
                let findId = await connection.query(findIdCusScript, [user.customer.fname, user.customer.lname])
                await connection.query(addAccountScript, [user.account.username, hash, findId[0][0].customer_id])
            })
            
        await connection.commit()
        res.json({massage: "Success"})
        next("User Register Success")
        }        
    } catch (err) {
        await connection.rollback()
        res.json({massage: "Something Went Wrong !, please try again"})
        next(err)
    } finally {
        console.log('ServerLog : End Register Process')
        connection.release()
    }
    
})


function forwardMiddleware (massage ,req, res, next) {
    if (massage === "User Register Success") {
       console.log(massage)
       //
    }
    else  {
        console.log("Have ploblem in process")
    }
    
}

router.use(forwardMiddleware)

exports.router = router
