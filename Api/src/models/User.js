const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
        username: {
        type: DataTypes.STRING,
        },
        email: {
        type: DataTypes.STRING,
        },
        password: {
        type: DataTypes.STRING,
        },

    }, {
        timestamps: false,
    });
};