
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Review", {
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        roomid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        charset: "utf8",
        collate: "utf8_unicode_ci"
    });
};
