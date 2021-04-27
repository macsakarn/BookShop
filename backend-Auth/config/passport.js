const poolData = require('../config/database');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');
const { FindAcc, ErrMassage } = require('../lib/template');


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
  };
  

module.exports =  (passport) => {
    passport.use(new JwtStrategy(options, async function(jwt_payload, done) {
    
        const db = await poolData.getConnection();
        
        try{   
            const user = await db.query(FindAcc.Jwtscript, eval(FindAcc.JwtIdparams));

            console.log(jwt_payload);
            console.log(user[0][0]);
            
            if (user[0][0]) {
                return done(null, user)
            }
            else {
                return done(null, false);
            }
    
        } catch ( err ) {
            console.log(ErrMassage)
        } finally {
            db.release();
        }
      
    }));
}