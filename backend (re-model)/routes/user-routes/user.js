const router = require('express').Router();
const passport = require('passport');
const poolData = require('../../config/database');
const { Register, Login, ExtractToken } = require('../../library/authModule');
const { MakeOrder, UserFetchOrder, UserDeleteOrder } = require('../../library/orderModule');
const { loginSQL } = require('../../library/SqlScript');
const { validateOrder, validateUserRegister, validateAdminUserLogin } = require('../../library/validateModule');

router.post('/test', async (req, res, next) => {
    console.log(req.body)
    const a = validateOrder(req.body)
    res.json({ status: a });

})

router.get('/protected', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const jwt_payload = ExtractToken(req.headers.authorization);
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        const findUser = await database.query(loginSQL.find_user, [jwt_payload.email]);
        console.log(`Going to User ${findUser[0][0].customer_email} protected route.....`);
        const status = { status: true, msg: 'you are authorized', userData: findUser[0][0] };
        if (findUser[0][0]) {
            console.log("User has access to protected routes")
            console.log("User Data :");
            console.log(status);
            res.status(200).json(status);
        }
        else {
            console.log("Someone try to access protected route But Fail");
            res.status(401).json({ massage: "Get Out" })
        }
    }
    catch (err) {
        // database.rollback();
        console.log("Detect some bug..");
        console.log(err);
        res.status(401).json({ massage: "Something went wrong" })
    }
    finally {
        database.release();
    }
})

router.post('/register', async (req, res, next) => {
    const dataObject = req.body;
    const valid = validateUserRegister(dataObject.customer, dataObject.account);

    if(valid.customer_result === true && valid.account_result === true){
        const regis = await Register("customer", dataObject);
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
        return res.send(valid)
    }
   
})

router.post('/login', async (req, res, next) => {
    const dataObject = req.body;
    const valid = validateAdminUserLogin(dataObject);

    if(valid.result === true) {
        const login = await Login("customer", dataObject);
        console.log(login);
        if (login.status === false) {
            res.status(401).json({ massage: login.massage });
        }
        else {
            res.send(login);
        }
    }
    else {
        console.log("Validate found problem :");
        console.log(valid);
        return res.send(valid)
    }
})


router.post('/makeorder', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const dataObject = req.body;
    const jwt_payload = ExtractToken( req.headers.authorization );
    if (validateOrder(dataObject) && jwt_payload.role === 'customer') {
        const order = await MakeOrder(dataObject, jwt_payload.sub);
        res.json(order);
    }

})

router.post('/editorder', passport.authenticate('jwt', { session: false }), async (req,res, next) => {
    const dataObject = req.body;
    const jwt_payload = ExtractToken(req.headers.authorization);

    if (jwt_payload.role === 'customer') {
        // const order = ;
    }
    
})


router.get('/fetchOrder', passport.authenticate('jwt', { session: false }), async (req, res, next)=> {
    const jwt_payload = ExtractToken( req.headers.authorization );
    const id = jwt_payload.sub;
    if(jwt_payload.role === "customer"){
        const order = await UserFetchOrder(id)
        console.log("order result : ");
        console.log(order);
        res.json(order);
    }
    else {
        res.status(401).json({status : false, massage: 'Unauthorize'})
    }
})

router.delete('/order/delete/:id', passport.authenticate('jwt', { session: false }), async(req, res, next) => {
    const data = req.body;
    const jwt_payload = ExtractToken( req.headers.authorization );
    const id = jwt_payload.sub;
    if(jwt_payload.role === "customer"){
        const order = await UserDeleteOrder(data,id)
    }
})



module.exports = router;
