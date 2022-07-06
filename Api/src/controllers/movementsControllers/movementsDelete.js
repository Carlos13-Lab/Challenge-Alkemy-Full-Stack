const { Movement } = require('../../db.js');


const movementsDelete = async (req, res, next) => {
    const { id, date } = req.body;


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
        res.status(200).send(`El movimiento ${targetMovement.concept}, con fecha ${date}, ha sido eliminado.`)
    } catch (error) {
        next(error)
    }
}
module.exports = movementsDelete;
