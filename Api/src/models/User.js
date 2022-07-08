const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
        fullName: {
            type: DataTypes.STRING,
            required: true,
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            required: true,
        },
        gender: {
            type: DataTypes.STRING,
            default: 'male',
            enum: ['male', 'female'],
        },
    }, {
        timestamps: false,
    });
};