const { Router } = require('express');
const router = Router();
const users = require('../routes/user.routes');
const authRegister = require('../routes/register.routes');
const movements = require('../routes/movements.routes');
const authLogin  = require('../routes/login.routes');

router.use('/movements', movements);

router.use('/users', users);

router.use('/user:id', users);

router.use('/auth/register', authRegister);

router.use('/auth/login', authLogin);

module.exports = router;