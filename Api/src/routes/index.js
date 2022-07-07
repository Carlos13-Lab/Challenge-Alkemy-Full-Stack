const { Router } = require('express');
const router = Router();
const { check, body } = require('express-validator');
const {
    validateField,
} = require('../middlewares');


const movementsGet = require('../controllers/movementsControllers/movementsGet');
const movementsPost = require('../controllers/movementsControllers/movementsPost');
const movementsPut = require('../controllers/movementsControllers/movementsPut');
const movementsDelete = require('../controllers/movementsControllers/movementsDelete');


//============================
//       Movements
//============================

router.get('/movements',movementsGet);

router.post('/movements',[
    
    check('concept').isLength({ min: 1 }),
    body('concept', 'Concept is required').not().isEmpty(),
    body('date', 'date must be in format DD/MM/YYYY')
        .if(body('date').exists())
        .isDate({ format: 'DD/MM/YYYY' }),
    validateField
] ,movementsPost);

router.put('/movements',  [
    check('concept').isLength({ min: 1 }),
    body('concept', 'Concept is required').not().isEmpty(),
    body('date', 'date must be in format DD/MM/YYYY')
        .if(body('date').exists())
        .isDate({ format: 'DD/MM/YYYY' }),
    validateField
],movementsPut);

router.delete('/movements', movementsDelete);


//============================
//         User
//============================


// router.get('/test', async (req, res, next) => {
//     try {
//         res.status(200).send('deploy succesfull!')
//     }
//     catch (error) {
//         next(error)
//     }
// })

module.exports = router;