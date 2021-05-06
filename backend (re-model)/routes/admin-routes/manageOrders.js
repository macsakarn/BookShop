const router = require('express').Router();
const passport = require('passport');
const { ExtractToken } = require('../../library/authModule');
const { AdminEditOrder, FetchAllBooks, FetchOrderById } = require('../../library/orderModule');



router.put('/edit', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const data = req.body;
    const jwt_payload = ExtractToken(req.headers.authorization);
    if (jwt_payload.role === "I'm admin") {
        const order = await AdminEditOrder(data, jwt_payload);
        console.log("edit result : ");
        res.json(order);
    }
    else {
        res.status(401).json({ status: false, massage: 'Unauthorize' })
    }

})

router.get('/fetchOrder/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const id = req.params.id
    const jwt_payload = ExtractToken(req.headers.authorization);
    if (jwt_payload.role === "I'm admin") {
        const order = await FetchOrderById(id)
        console.log("order result : ");
        console.log(order);
        res.json(order);
    }
    else {
        res.status(401).json({ status: false, massage: 'Unauthorize' })
    }
})


router.get('/fetchAllOrder', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const jwt_payload = ExtractToken(req.headers.authorization);

    if (jwt_payload.role === "I'm admin") {
        const order = await FetchAllBooks();
        console.log("fetch all order result : ");
        console.log(order);
        res.json(order);
    }
    else {
        res.status(401).json({ status: false, massage: 'Unauthorize' })
    }
})

module.exports = router;


