const { Movement } = require('../../db.js');

const movementsDelete = async (req, res) => {
    const { id } = req.body;


    try {
        let targetMovement = await Movement.findByPk(id)
        if (!targetMovement) {
            res.status(400).send(`no hay movimientos con el id ${id}`)
        }
        await Movement.destroy({
            where: {
                id: targetMovement.id
            }
        })
        res.json({
            msg: 'delete movement',
            movement: {
                id: targetMovement.id,
                concept: targetMovement.concept,
                date: targetMovement.date,
                amount: targetMovement.amount,
                type: targetMovement.type
            }
        }).status(200)
    } catch (error) {
        next(error);
    }
}
module.exports = movementsDelete;
