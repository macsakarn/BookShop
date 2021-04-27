const router = require('express').Router();

router.use('/user', require('./user-routes/user'));

module.exports = router;