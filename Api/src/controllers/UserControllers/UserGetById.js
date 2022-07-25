const { User , Movement} = require('../../db.js');

const getUserById = async (req, res, next) => {

    try {
const { id } = req.params;
    const user = await User.findByPk(id,
        {
            include: [
                {
                    model: Movement,
                    as: 'movements'
                }
            ]
        }
        );

    res.json(user);
 

    } catch (error) {
       next(error);
    }

}

module.exports = getUserById;