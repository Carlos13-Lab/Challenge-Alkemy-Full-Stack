const jwt = require('jsonwebtoken');
const config = require("../config/auth.config.js");
const Movement = require('../models/Movements');

//Validate JWT
const validateJWT = async (req, res) => {
    let token = req.headers["xtoken"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    const { id } = jwt.verify(token, config.secret);

    //Find user by id
    const movement = await Movement.findById(id);
    console.log(movement);
    //Check if user exist
    // if (!movement) {
    //     return response.error(req, res, 'User not found', 404);
    // }
    // req.movement = movement;

    next();    
};

module.exports = { validateJWT };
