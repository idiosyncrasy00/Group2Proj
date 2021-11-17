
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Meeting', {
        // id is auto-generated
        adminid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        roomid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reserveddate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        startingtime: {
            type: DataTypes.INTEGER(30),
            allowNull: false
        },
        during: {
            type: DataTypes.INTEGER(30),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING
        }
    }, {
        charset: "utf8",
        collate: "utf8_unicode_ci"
    });
};
