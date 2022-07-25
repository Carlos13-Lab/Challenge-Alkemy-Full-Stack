const { response } = require('../../helpers/response');
const { User } = require('../../db.js');


const UserDelete = async (req, res, next) => {
    const { id } = req.body;


    try {
        let targetUser = await User.findByPk(id)
        if (!targetUser) {
            res.status(400).send(`no hay User con el id ${id}`)
        }
        await Movement.destroy({
            where: {
                id: targetUser.id
            }
        })
        res.json({
            msg: 'User eliminado',
            User: {
                id: targetUser.id,
                concept: targetUser.concept,
                date: targetUser.date,
                amount: targetUser.amount,
                type: targetUser.type
            }
        }).status(200)
        
    } catch (error) {
        next(error);
    }
}
module.exports = UserDelete;
