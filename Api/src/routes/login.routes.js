const { Router } = require('express');
const router = Router();

const  { login } = require('../controllers/AuthUserControllers/auth.controller');


//============================
//       Auth
//============================
router.post('/', login);




module.exports = router;