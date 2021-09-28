
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 50]
            }
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