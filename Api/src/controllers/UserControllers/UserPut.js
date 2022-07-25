const { User } = require('../../db.js');
const response = require('../../helpers/response');
const UserPut = async (req, res, next) => {
    const { id } = req.params;
    const { username, email } = req.body;

    const user = await User.findByPk(id);

try {
    await User.update({
        username,
        email
    });

    res.json({
        msg: 'movement updated',
        User: {
            id: user.id,
            username: user.username,
            email: user.email

        }
    });
} catch (error) {
    next(error);
 }
}
module.exports = UserPut;