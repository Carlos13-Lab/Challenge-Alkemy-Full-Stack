const { Router } = require('express');
const router = Router();
// const { check, body } = require('express-validator');
// const {
//     validateField,
//     validateJWT
// } = require('../middlewares');


const UserGet = require('../controllers/UserControllers/UserGet');
const UserPut = require('../controllers/UserControllers/UserPut');
const UserDelete = require('../controllers/UserControllers/UserDelete');
const UserById = require('../controllers/UserControllers/UserGetById'); 

//============================
//       Movements
//============================

router.get('/', UserGet);

router.get('/:id', UserById);

router.put('/', UserPut);

router.delete('/', UserDelete);



module.exports = router;