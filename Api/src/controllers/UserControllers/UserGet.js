const { User , Movement} = require('../../db.js'); 
const response = require('../../helpers/response');

const UserGet = async (req, res, next) => {
    try {
        let info = await User.findAll(
            {
                include: [
                    {
                        model: Movement,
                        as: 'movements'
                    }
                ]
            }
            )
       
        res.json(info);
    }
    catch (error) {
        next(error);
        
    }
}

module.exports = UserGet;