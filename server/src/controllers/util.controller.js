const models = require('../models');
const Meeting = models.Meeting;
const User = models.User;
const Room = models.Room;
const Participant = models.Participant;
const sequelize = models.sequelize;


const getReservedMeetingList = async (req, res) => {
    let meetings = await Meeting.findAll({
        where: {
            adminid: req.user.id
        },
        attributes: ['id', 'adminid', 'roomid', 'reserveddate', 'startingtime', 'during', 'title', 'content', 'status'],
        include: [{
            model: User,
            as: "admin",
            attributes: [
                'id',
                [sequelize.fn('CONCAT', sequelize.col('firstname'), ' ', sequelize.col('lastname')), 'adminname']
            ]
        }, {
            model: Room,
            as: "room",
            attributes: ['id', 'roomname']
        }]
    });
    res.send(meetings);
};

const getInvitedMeetingList = async (req, res) => {
    let meetings = await Meeting.findAll({
        attributes: ['id', 'adminid', 'roomid', 'reserveddate', 'startingtime', 'during', 'title', 'content', 'status'],
        include: [{
            model: User,
            as: "participant",
            // required: false,
            // right: true,
            attributes: [],
            where: {
                id: req.user.id
            }
        }, {
            model: User,
            as: "admin",
            attributes: [
                'id',
                [sequelize.fn('CONCAT', sequelize.col('admin.firstname'), ' ', sequelize.col('admin.lastname')), 'adminname']
            ]
        }, {
            model: Room,
            as: "room",
            attributes: ['id', 'roomname']
        }]
    });
    res.send(meetings)
};


module.exports = { getReservedMeetingList, getInvitedMeetingList };
