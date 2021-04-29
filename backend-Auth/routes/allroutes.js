const router = require('express').Router();
const cors = require('cors')

router.use(cors())

router.use('/user', require('./user-routes/user'));

router.use('/admin', require('./admin-routes/admin'))

module.exports = router;