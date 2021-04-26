const passport = require('passport')
const poolData = require("../config/database")
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT  = require('passport-jwt').ExtractJwt

const validPassword = require('../lib/passwordUtils').validPassword

const verifyCallback = async (username, password, done) => {
    const connection = await poolData.getConnection()
    const solveUglyDatabase = `
        SELECT * FROM ACCOUNTS A
        INNER JOIN CUSTOMER C
        ON A.CUSTOMER_customer_id = C.customer_id
        WHERE customer_email = ?
    
    `
    await connection.beginTransaction()
    try
    {
        const user_query = await connection.query(solveUglyDatabase , [username])
        const user = user_query[0][0]
        if(!user)
        {
            return done(null, false)
        }
        else
        {
            const isValid = await validPassword(password, user.password)
            console.log("Is Valid = "+isValid)
            if (isValid===true) { return done(null, user)}
            else {return done(null, false)}
        }

    }
    catch (err) 
    {
        console.log(err)
    }
    finally
    {
        connection.release()
        console.log("END PROCESS Login")
    }
}

const option = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey    : '12345'
}

const jwtCallback = async function (jwt_payload, done) {
    try {
        if (jwt_payload) {
            return done(null, jwt_payload)
        }
        else
        {
            return done(null, false)
        }
    }
    catch (err) 
    {
        return done(null, err)
    }
}


const localStrategy = new LocalStrategy(verifyCallback)
const jwtStrategy = new JWTStrategy(option, jwtCallback)

passport.use(localStrategy)
passport.use(jwtStrategy)