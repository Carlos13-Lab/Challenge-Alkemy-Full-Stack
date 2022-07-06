const { Movement } = require('../../db.js');

const MovementPost = async (req, res, next) => {
    const { concept, date, amount, type } = req.body

    try {
        const newMovement = await Movement.create({
            concept,
            date,
            amount,
            type
        })
        res.json(newMovement)
    }
    catch (error) {
        next(error)
    }
}

module.exports =  MovementPost;