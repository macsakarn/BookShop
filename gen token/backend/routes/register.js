const express = require("express")
const poolData = require("../config/database")

const genPassword = require("../lib/passwordUtils").genPassword
const router = express.Router()

router.post('/register', async (req, res, next) => {
    const user = req.body
    const addCusScript = `INSERT INTO CUSTOMER(customer_fname, customer_lname, customer_address, customer_email, customer_tel) VALUES (?, ?, ?, ?, ?);`
    const findIdCusScript = `SELECT customer_id FROM CUSTOMER WHERE customer_fname = ? AND customer_lname = ?` 
    const addAccountScript = `INSERT INTO ACCOUNTS (username, password, CUSTOMER_customer_id) VALUES (?, ?, ?)`
        
    const connection = await poolData.getConnection()
    await connection.beginTransaction()
    try
    {
        const checkAccount = await connection.query("SELECT customer_email FROM CUSTOMER WHERE customer_email=?", [user.customer.email])
        if (checkAccount[0].length > 0) {

            console.log("this email has already registered")
            res.json({massage : 'this email already registered', status : false})
        
        }
        else {

            const Hashing = await genPassword(user.account.password)
            
            await connection.query(addCusScript, [user.customer.fname, user.customer.lname, user.customer.address, user.customer.email, user.customer.tel])
            
            let findId = await connection.query(findIdCusScript, [user.customer.fname, user.customer.lname])

            await connection.query(addAccountScript, [user.account.username, Hashing, findId[0][0].customer_id])

            await connection.commit()
            console.log("Register Success")
            res.json({massage : 'Register Success'})
        }
    }
    catch (err) 
    {
        connection.rollback()
        console.log(err)
        res.json({massage: "Something Went Wrong !, please try again"})
    }
    finally 
    {
        console.log('ServerLog : End Register Process')
        connection.release()
    }
})

exports.router = router