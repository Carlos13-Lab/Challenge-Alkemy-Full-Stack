const { Movement } = require('../../db.js');

const MovementPost = async (req, res, next) => {
    const userId = req.userId;
    const { concept, date, amount, type, user_id} = req.body

    try {
        const newMovement = await Movement.create({
            concept,
            date,
            amount,
            type,
            user_id: userId
        })
        res.json({ 
            message: 'Movement created',
             newMovement: {
                id: newMovement.id,
                concept: newMovement.concept,
                date: newMovement.date,
                amount: newMovement.amount,
                type: newMovement.type,
                user_id: newMovement.user_id
             }
        })
    }
    catch (error) {
        next(error);
    }
}

module.exports =  MovementPost;