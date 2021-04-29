const router = require('express').Router();
const { decode } = require('jsonwebtoken');
const passport = require('passport');
const poolData = require('../../config/database');
const { FindAd, RegisAdmin } = require('../../lib/adminTemplate');
const { Register } = require('../../lib/template');
const { validPassword, genPassword, issueAdminJWT } = require('../../lib/utils');

router.get('/protected', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ');
    var jwt_payload = decode(token[1]);
    console.log(jwt_payload)
    if (jwt_payload.role === "I'm admin") {
        res.status(200).json({ status: true, msg: 'you are authorized', SomeData: { adminId: jwt_payload.sub, adminUsername: jwt_payload.username } })
    }
    else {
        res.status(401).json({ massage: "Get Out" })
    }

})

router.post('/register', async (req, res, next) => {
    const admin = req.body;
    const hash = await genPassword(admin.password);
    const db = await poolData.getConnection();
    db.beginTransaction();
    try {
        const isExit = await db.query(FindAd.byUser, eval(FindAd.userParams));

        if (isExit[0][0]) {
            res.json(Register.duplicate);
        }

        else {
            await db.query(RegisAdmin.RegisScript, eval(RegisAdmin.params));
            const jwtToken = issueAdminJWT(admin);
            await db.commit();

            res.json({ Response: Register.success, token: jwtToken })

        }

    } catch (err) {
        db.rollback();
        console.log(err);
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
        const admin = await db.query(FindAd.byUser, eval(FindAd.userParams));

        if (!admin[0][0]) {
            return res.status(401).json({ status: false, massage: "could not find account" });
        }
        const isValid = validPassword(req.body.password, admin[0][0].password);

        if (isValid) {
            const tokenObject = issueAdminJWT(admin[0][0]);
            res.status(200).json({ status: true, token: tokenObject.token, expiresIn: tokenObject.expires });
        }

        else {
            res.status(401).json({ status: false, msg: "you entered the wrong password" });
        }
    } catch (err) {
        next(err)
    } finally {
        db.release();
    }
})

module.exports = router;
