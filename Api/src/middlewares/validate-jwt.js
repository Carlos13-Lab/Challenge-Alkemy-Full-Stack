const jwt = require('jsonwebtoken');
const config = require("../config/auth.config.js");

//Validate JWT
const validateJWT = async (req, res, next) => {
    let token = req.headers["xtoken"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

            

    jwt.verify(token, config.secret, () => {
        res.status(200,).send({
            message: "Token is valid"
        })
    });
    next();
};

module.exports = { validateJWT };
