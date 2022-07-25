const jwt = require('jsonwebtoken');

//Validate JWT
const validateJWT = async (req, res, next) => {
    let token = req.headers["xtoken"];
    if (!token) {
        return res.status(403).send({
         message: "No token provided!"
        });
    }
    try {
        const {id} = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = id;
        next();
    } catch (error) {
        res.status(403).json({
            message: "Invalid token!"
        }); 
        
    }
};

module.exports = { validateJWT };
