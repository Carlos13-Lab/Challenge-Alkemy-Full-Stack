const { Movement } = require('../../db.js');

const movementGet = async (req, res, next) => {
    try {
        // Get all movements objects
        let info = await Movement.findAll({
            order: [
                ['date','DESC']
                ]});

        const balance = await Movement.sum('amount');
           
        const total = parseFloat(balance).toFixed(2); 
        res.json({ 
            info,
            total : total ? total : 0
        })
    }
    catch (error) {
        next(error);
    }
}

module.exports = movementGet;