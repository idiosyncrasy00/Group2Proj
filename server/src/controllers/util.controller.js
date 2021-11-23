const models = require('../models');
const Meeting = models.Meeting;
const User = models.User;
const Room = models.Room;
const Participant = models.Participant;
const sequelize = models.sequelize;
const Op = models.Op;
const validation = require('../validations/util.validation');


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
    res.send(meetings);
};

const queryMeeting = async (req, res) => {
    const {error, value} = await validation.querySchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        let meetings = await Meeting.findAll({
            attributes: ['id', 'adminid', 'roomid', 'reserveddate', 'startingtime', 'during', 'title', 'content', 'status'],
            include: [{
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
            }],
            where: {
                [Op.and]: [{
                    title: {
                        [Op.substring]: value.title
                    }
                }, (
                    (value.reserveddate != "") ? { reserveddate: value.reserveddate } : {}
                ), (
                    sequelize.where(sequelize.fn('CONCAT', sequelize.col('admin.firstname'), ' ', sequelize.col('admin.lastname')), Op.like, `%${value.adminname}%`)
                ), {
                    '$room.roomname$': {
                        [Op.substring]: value.roomname
                    } 
                }]
            }
        });
        res.send(meetings);
    }
};

module.exports = { getReservedMeetingList, getInvitedMeetingList, queryMeeting };
