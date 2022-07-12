const { Router } = require('express');
const router = Router();

const { register } = require('../controllers/AuthUserControllers/auth.controller');


//============================
//       Auth
//============================
router.post('/', register);




module.exports = router;