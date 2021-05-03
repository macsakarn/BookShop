const poolData = require("../config/database");
const { decode } = require('jsonwebtoken');
const { regisSQL, regisParamsSQL, loginSQL, loginParams } = require("./SqlScript");
const { issueJWT, genPassword, issueAdminJWT, validPassword } = require("./utils");

async function Register ( role, data ) {
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        if ( role === 'customer') {
            const hash = await genPassword(data.account.password);
            console.log("Customer Begin Register Process.....");
            const isExit = await database.query ( regisSQL.find_user, eval ( regisParamsSQL.find_user ));
            if ( isExit[0][0] ) {
                return { status : false , massage : "This Email already registered, Pls try with different email."}
            }

            else {
                await database.query ( regisSQL.insert_user, eval ( regisParamsSQL.insert_user ) );
                const findCusId = await database.query ( regisSQL.find_userId, eval( regisParamsSQL.find_userId ) );
                if ( findCusId[0][0] ) {
                    await database.query ( regisSQL.insert_account, eval( regisParamsSQL.insert_account));
                    const jwtToken = issueJWT ( data );
                    await database.commit();
                    return { status : true, token : jwtToken }
                }
            }
        }

        else if ( role === 'admin' && data.secretCode === "ask your boss pls") {
            console.log("Admin Begin Register Process.....");
            const hash = await genPassword(data.password);
            const isExit = await database.query ( regisSQL.find_admin, eval ( regisParamsSQL.find_admin ));

            if ( isExit[0][0] ) {
                return { status : false , massage : "This Username already registered, Pls try with different username OR May be you already have admin account"}
            }

            else {
                await database.query ( regisSQL.insert_admin, eval ( regisParamsSQL.insert_admin ) );
                const findAdmin = await database.query( loginSQL.find_admin, eval ( loginParams.find_admin ) );
                const jwtToken = issueAdminJWT( findAdmin[0][0] );
                await database.commit();
                return {status : true, admin : "Now you are admin !",token : jwtToken}
            }

        }

        else {
            console.log("Admin Begin Register Process.....");
            return {status : null, massage : "User Access Denied"}
        }
    }

    catch ( err ) {
        database.rollback();
        console.log("Detect some bug....")
        console.log( err );
        return {status : false , error : "Something went wrong"}
    }

    finally {
        database.release();
        console.log("End Register Process");
        console.log("Register Result :");
    }
}

module.exports.Register = Register;


async function Login (role, data) { 
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {

        if ( role === "customer" ) {
            console.log("Customer Begin Login Process...");
            const findUser = await database.query( loginSQL.find_user, eval ( loginParams.find_user ) );

            if ( !findUser[0][0] ) {
                return  { status : false, massage : "Can't Find Your Account"}
            }

            const isValid = validPassword(data.password, findUser[0][0].password);

            if (isValid) {
                const tokenObject = issueJWT( findUser[0][0] );
                return { status : true, massage : "Login Success", token : tokenObject }
            }

            else {
                return { status : false, massage : "Unauthorize" }
            }
        }

        if (role === "admin") {
            console.log("Admin Begin Login Process...");
            const findAdmin = await database.query( loginSQL.find_admin, eval ( loginParams.find_admin ) );
            console.log(findAdmin[0][0])
            if ( !findAdmin[0][0]  ) {
                return { status : false, massage : "Can't Find Your Account"}
            }

            const isValid  = validPassword(data.password, findAdmin[0][0].password);

            if (isValid) {
                const tokenObject = issueAdminJWT( findAdmin[0][0] );
                return { status : true, massage : "Login Success", token : tokenObject }
            }

            else {
                return { status : false, massage : "Unauthorize" }
            }
        }
    }

    catch ( err ) {
        database.rollback();
        console.log("Detect some bug....")
        console.log( err );
        return {status : false , error : "Something went wrong"}
    }

    finally {
        database.release();
        console.log("End Login Process");
        console.log("Login Result :");
    }
   
}

module.exports.Login = Login;

function ExtractToken ( authHeader ) { 
    console.log("request Header Extract and Decode....")
    const rawToken = authHeader.split(' ');
    const jwt_payload = decode(rawToken[1]);
    return jwt_payload;
}


module.exports.ExtractToken = ExtractToken;