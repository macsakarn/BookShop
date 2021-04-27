const router = require('express').Router();
const passport = require('passport');
const poolData = require('../../config/database');
const decode = require('jwt-decode');
const { Find, Register, ErrMassage, FindAcc } = require('../../lib/template');
const { genPassword, issueJWT, validPassword } = require('../../lib/utils');


router.get('/protected', passport.authenticate('jwt', {session : false}), async (req, res, next)=> { 
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')
    var jwt_payload = decode(token[1])
    const db =  await poolData.getConnection();
    db.beginTransaction();
    const user = await db.query(FindAcc.Jwtscript, eval(FindAcc.JwtIdparams));
    res.status(200).json({status : true, msg: 'you are authorized', userData : user[0][0]}) 
}) 


router.post('/register', async (req, res, next) => {
    const user = req.body;
    const hash = await genPassword(user.account.password);
    const db =  await poolData.getConnection();
    db.beginTransaction();
    try {
        const isExit = await db.query(Find.userByEmail, eval(Find.emailParams));
        console.log(isExit)

        if (isExit[0][0]) {
            console.log(Register.duplicate.massage);
            res.json(Register.duplicate);
        }

        else {
            await db.query(Register.cusScript, eval(Register.cusParams));

            const findId = await db.query(Find.userIdByName, eval(Find.nameParams));
          
            if (findId[0][0]) {
                console.log("fkeo");
                console.log(eval("hash"));
                await db.query(Register.accScript, eval(Register.accParams));
            }

            const jwtToken = issueJWT( user, findId[0][0]);

            await db.commit();

            res.json({Response : Register.success, token : jwtToken})

        }

    } 
    catch ( err ) {
        db.rollback();
        console.log( err );
        res.json(eval(ErrMassage.error))
    }
    finally {
        db.release();
    }
})


router.post('/login', async (req, res, next) => {
    const db = await poolData.getConnection();
    db.beginTransaction();
    try {

        const user = await db.query(FindAcc.script, eval(FindAcc.params));
        console.log(user[0][0])
        if (!user[0][0]) {
            return res.status(401).json({ success: false, massage: "could not find user" })
        }


        const isValid = validPassword(req.body.password, user[0][0].password)

        if (isValid) {
            const tokenObject = issueJWT(user[0][0]);
            res.status(200).json({ status: true, token: tokenObject.token, expiresIn: tokenObject.expires });
        }

        else {

            res.status(401).json({ status: false, msg: "you entered the wrong password" });

        }

    } catch (err) {
        next (err)
    } finally {
        db.release();
    }
})

module.exports = router;
