const router = require('express').Router();
const { decode } = require('jsonwebtoken');
const { Register, Login, ExtractToken } = require('../../library/authModule');
const passport = require('passport');
const { validateAdminRegister, validateAdminUserLogin } = require('../../library/validateModule');
const { getSomethings } = require('../../library/getDataModule');
const { fetchAllBooksAdmin } = require('../../library/SqlScript');


router.get('/protected', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const jwt_payload = ExtractToken(req.headers.authorization);
    console.log("Going to Admin protected route.....");
    console.log(jwt_payload);
    if (jwt_payload.role === "I'm admin") {
        const results = { status: true, msg: 'you are authorized', SomeData: { adminId: jwt_payload.sub, adminUsername: jwt_payload.username, fname: jwt_payload.fname, lname: jwt_payload.lname } };
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


router.post('/register', async (req, res, next) => {
    const dataObject = req.body;
    const valid = validateAdminRegister(dataObject)

    if (valid.result === true) {
        const regis = await Register("admin", dataObject);
        console.log(regis);
        if (regis.status === null) {
            res.status(401).json({ massage: "Access denied" })
        }

        else {
            res.send(regis);
        }

    }
    else {
        console.log("Validate found problem :");
        console.log(valid);
        return res.send(valid);
    }


})


router.post('/login', async (req, res, next) => {
    const dataObject = req.body;
    const valid = validateAdminUserLogin(dataObject);

    if (valid.result === true) {

        const login = await Login("admin", dataObject);
        console.log(login);

        if (login.status === false) {
            res.status(401).json({ massage: "Unauthorize" })
        }

        else {
            res.send(login)
        }

    }
    else {
        console.log("Validate found problem :");
        console.log(valid);
        return res.send(valid);
    }
})

router.get('/fetchAllBooks', async (req, res, next) => {
    console.log("Begin fetchAllBooks Process...");
    const books = await getSomethings(fetchAllBooksAdmin.script)
    // console.log(books);

    books[0].forEach(val => {
        const author = val.author_name.split(', ')
        const type = val.type.split(', ')
        val.author_name = author
        val.type = type
    });

    console.log("Send All Books to Client result : ");
    console.log("Book Data amount -> " + books[0].length + "books");
    res.json(books[0]);
})




module.exports = router;
