
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Participant', {
        // id is auto-generated
        meetingid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isaccepting: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        feedback: {
            type: DataTypes.STRING
        }
    }, {
        charset: "utf8",
        collate: "utf8_unicode_ci",
        uniqueKeys: {
            Participant_unique: {
                fields: ['meetingid', 'userid']
            }
        }
    });
};