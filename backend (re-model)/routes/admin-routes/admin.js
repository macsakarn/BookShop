const router    =   require('express').Router();
const { decode } = require('jsonwebtoken');
const { Register, Login, ExtractToken } = require('../../library/authModule');
const passport = require('passport');



router.get('/protected', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const jwt_payload = ExtractToken( req.headers.authorization );
    console.log("Going to Admin protected route.....");
    if (jwt_payload.role === "I'm admin") {
        const results = { status: true, msg: 'you are authorized', SomeData: { adminId: jwt_payload.sub, adminUsername: jwt_payload.username }};
        console.log("Admin has access to protected routes")
        console.log("Admin Data :");
        console.log(results);
        res.status(200).json(results);
    }
    else {
        console.log("Someone try to access protected route But Fail");
        res.status(401).json({ massage: "Get Out" })
    }

})


router.post ('/register', async (req, res, next) => {
    const dataObject = req.body;
    const regis = await Register("admin", dataObject);

    console.log(regis);

    if (regis.status===null) {
        res.status(401).json({massage : "Access denied"})
    }

    else {
        res.send(regis);
    }
})


router.post ('/login', async (req, res, next) => {
    const dataObject = req.body;
    const login  = await Login("admin", dataObject);

    console.log(login);

    if (login.status===false) {
        res.status(401).json({massage : "Unauthorize"})
    }

    else {
        res.send(login)
    }
})






module.exports = router;
