
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [5, 255]
            }
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                is: /^\$2[ayb]\$.{56}$/i
            }
        }
    });
}