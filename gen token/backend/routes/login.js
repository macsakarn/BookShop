const express = require("express")
const jwt = require('jsonwebtoken')
const passport = require("passport")
// const cookieParser = require('cookie-parser')

const router = express.Router()

router.post('/login', (req,res,next) => {
    passport.authenticate('local', {session:false}, (err, user, info) => {
        console.log(user)
       if (user) {
           const expiration = 10000
           const token = jwt.sign({username : user.customer_email}, '12345') //{expiresIn: expiration}
           console.log(token)
           return res.cookie('token' , token, {
               expires: new Date(Date.now()+expiration),
               secure: true,
               httpOnly : true
           })
           
        //    res.json(token) 
        //    return res.json({status:true})
       }
       else {
           return res.status(422).json({status:false})
       }
    }) (req, res, next)
})

exports.router = router