const router    =   require('express').Router();
const passport = require('passport');
const { ExtractToken } = require('../../library/authModule');
const { AdminEditOrder } = require('../../library/orderModule');



router.post('/edit', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const data = req.body;
    const jwt_payload = ExtractToken( req.headers.authorization );
    if (jwt_payload.role === "I'm admin"){
        const order = await AdminEditOrder(data, jwt_payload);
        console.log("edit result : ");
        console.log(order);
        res.json(order);
    }
    else {
        res.status(401).json({status : false, massage: 'Unauthorize'})
    }
  
})




module.exports = router;
