
module.exports = (db) => {
    db.User.hasMany(db.Meeting, {
        foreignKey: 'adminid'
    });
    db.Meeting.belongsTo(db.User, {
        foreignKey: 'adminid'
    });
    db.Room.hasMany(db.Meeting, {
        foreignKey: 'roomid'
    });
    db.Meeting.belongsTo(db.Room, {
        foreignKey: 'roomid'
    });
    db.User.belongsToMany(db.Meeting, {
        through: db.Participant,
        foreignKey: 'userid'
    });
    db.Meeting.belongsToMany(db.User, {
        through: db.Participant,
        foreignKey: 'meetingid'
    });
};
