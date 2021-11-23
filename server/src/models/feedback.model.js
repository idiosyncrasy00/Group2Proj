
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Feedback", {
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        charset: "utf8",
        collate: "utf8_unicode_ci"
    });
};
