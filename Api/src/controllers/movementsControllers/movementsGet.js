const { Movement } = require('../../db.js');

const movementGet = async (req, res, next) => {
    try {
        let info = await Movement.findAll()
        info = info.sort((a, b) => b.id - a.id)
        res.json(info)
    }
    catch (error) {
        next(error)
    }
}

module.exports = movementGet;