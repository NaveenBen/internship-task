const router = require('express').Router();

//server test
router.get('/test', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the User Products API test route'
    });
})

//server health check
router.get('/health', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the User Products API health check route'
    });
})

router.use('/users', require('./user.route'));
module.exports = router;