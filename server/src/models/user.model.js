const moment = require('moment');

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
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            get() {
                return moment(this.getDataValue('dob')).format('DD/MM/YYYY');  // API format
            },
            set(value) {
                this.setDataValue('dob', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));  // Database format
            }
        },
        phone: {
            type: DataTypes.STRING(15)
        },
        address: {
            type: DataTypes.TEXT
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