const router = require('express').Router();

router.use('/user', require('./user-routes/user'));

router.use('/admin', require('./admin-routes/admin'))

module.exports = router;