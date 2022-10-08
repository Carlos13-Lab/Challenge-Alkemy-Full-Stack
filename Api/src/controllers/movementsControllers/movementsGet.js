const { Movement, User } = require('../../db.js');


const movementGet = async (req, res, next) => {
    try {
        
        // Get all movements objects
        let info = await Movement.findAll({
            order: [
                ['date','DESC']
                ]});

 
        res.json({ 
            info
        })
    }
    catch (error) {
        next(error);
    }
}

module.exports = movementGet;