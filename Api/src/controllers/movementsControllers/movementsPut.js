const { Movement } = require('../../db.js');

const movementsPut = async (req, res, next) => {
    const { id, concept, date, amount, type } = req.body;

    try {
        const updatedMovement = await Movement.update({
            concept,
            date,
            amount,
            type

        },
            { returning: true, where: { id: id } })
        res.status(200).send(`El movimiento "${concept}" fue modificado`)
    } catch (error) {
        next(error)
        res.status(500).send(`El movimiento no pudo modificarse ${error.message}`)
    }
    next();
}
module.exports = movementsPut;