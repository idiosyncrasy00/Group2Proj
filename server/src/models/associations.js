
module.exports = (db) => {
    db.User.hasMany(db.Meeting, {
        foreignKey: 'adminid'
    });
    db.Meeting.belongsTo(db.User, {
        foreignKey: 'adminid',
        as: "admin"
    });
    db.Room.hasMany(db.Meeting, {
        foreignKey: 'roomid'
    });
    db.Meeting.belongsTo(db.Room, {
        foreignKey: 'roomid',
        as: "room"
    });
    db.User.belongsToMany(db.Meeting, {
        through: db.Participant,
        foreignKey: 'userid'
    });
    db.Meeting.belongsToMany(db.User, {
        through: db.Participant,
        foreignKey: 'meetingid',
        as: "participant"
    });
    db.User.hasMany(db.Feedback, {
        foreignKey: "userid"
    });
    db.Feedback.belongsTo(db.User, {
        foreignKey: "userid",
        as: "user"
    });
};
