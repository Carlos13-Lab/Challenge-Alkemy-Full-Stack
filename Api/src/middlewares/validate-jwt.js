const jwt = require('jsonwebtoken');
const config = require("../config/auth.config.js");
const Movement = require('../models/Movements');

//Validate JWT
const validateJWT = async (req, res) => {
    let token = req.headers["xtoken"];
    let movement = await Movement.findOne({ where: { id: req.params.id } });

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    
    jwt.verify(token, config.secret, () => {
        res.status(200,).send({
            message: "Token is valid"
        })
        req.body = movement;
    });
    
};

module.exports = { validateJWT };
