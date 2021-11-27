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
        let invited = await Participant.findAll({
            attributes: ['meetingid'],
            where: {
                userid: req.user.id
            }
        });
        let invited_list = [];
        invited.forEach(i => invited_list.push(i['meetingid']));
        let meetings = await Meeting.findAll({
            attributes: ['id', 'adminid', 'roomid', 'reserveddate', 'startingtime', 'during', 'title', 'content', 'status',
                [sequelize.literal(`IF(adminid=${req.user.id}, "yes", "no")`), 'isadmin']],
            include: [{
                model: User,
                as: "admin",
                attributes: [
                    'id',
                    [sequelize.fn('CONCAT', sequelize.col('admin.firstname'), ' ', sequelize.col('admin.lastname')), 'adminname']
                ],
                where: {
                    [Op.and]: [(
                        sequelize.where(sequelize.fn('CONCAT', sequelize.col('firstname'), ' ', sequelize.col('lastname')), Op.like, `%${value.adminname}%`)
                    ), (
                        (value.adminid) ? { id: value.adminid } : {}
                    )]
                }
            }, {
                model: Room,
                as: "room",
                attributes: ['id', 'roomname'],
                where: {
                    roomname: {
                        [Op.substring]: value.roomname
                    }
                }
            }],
            where: {
                [Op.and]: [{
                    title: {
                        [Op.substring]: value.title
                    }
                }, (
                    (value.reserveddate != "") ? { reserveddate: value.reserveddate } : {}
                ), {
                    [Op.or]: [
                        { id: invited_list },
                        { adminid: req.user.id }
                    ]
                }]
            }
        });
        res.send(meetings);
    }
};

module.exports = { getReservedMeetingList, getInvitedMeetingList, queryMeeting };
