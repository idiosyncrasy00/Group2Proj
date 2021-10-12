
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Room', {
        // id is auto-generated
        roomName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING
        }
    })
};