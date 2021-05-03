const poolData = require('../config/database');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');
const padUnlock = 60320;
const { loginSQL } = require("../library/SqlScript");


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
  };
  

module.exports =  (passport) => {
    passport.use(new JwtStrategy(options, async function(jwt_payload, done) {
    
        if(jwt_payload.role === "I'm admin" && jwt_payload.padlock - padUnlock === 1500000) {      
            
            console.log("admin has auth");
            return done(null, jwt_payload)
            
        }

        else if (jwt_payload.role === "customer") {
            const db = await poolData.getConnection();
        
            try{   
                const findUser = await db.query(loginSQL.find_user, [jwt_payload.email]);
    
                // console.log(findUser[0][0]);
                
                if (findUser[0][0]) {
                    return done(null, findUser[0][0])
                }
                else {
                    return done(null, false);
                }
        
            } catch ( err ) {
                console.log( err )
            } finally {
                db.release();
            }
        }

        else {return done(null, false)}
      
    }));
}

