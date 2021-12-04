const { Feedback, Room, sequelize } = require('../models');
const validation = require('../validations/system.validation');


const sendFeedback = async (req, res) => {
    const {error, value} = await validation.feedbackSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message});
    } else {
        try {
            await Feedback.create({
                userid: req.user.id,
                message: value.message,
                time: sequelize.fn('NOW')
            });
            res.send();
        } catch(error) {
            res.status(400).send({ error: error.message });
        }
    }
};

const getRoomStats = async (req, res) => {
    const {error, value} = await validation.statsSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message});
    } else {
        // Date validation
        let temp = value.date.split('-');
        let year = parseInt(temp[0], 10);
        let month = parseInt(temp[1], 10);
        let day = parseInt(temp[2], 10);
        let startdate = "";
        let enddate = "";
        if (!year) {
            startdate = new Date(1975, 0, 1);
            enddate = new Date(2100, 12, 0);
        } else if (!month) {
            startdate = new Date(year, 0, 1);
            enddate = new Date(year, 12, 0);
        } else if (!day) {
            startdate = new Date(year, month - 1, 1);
            enddate = new Date(year, month, 0);
        } else {
            startdate = new Date(year, month - 1, day);
            enddate = new Date(year, month - 1, day + 1);
        }
        startdate = startdate.toISOString().replace(/T.+/, '');
        enddate = enddate.toISOString().replace(/T.+/, '');
        // Handle request
        let stats = await Room.findAll({
            attributes: ['id', 'roomname',
                [sequelize.literal(`(SELECT COUNT(*) FROM Meetings WHERE Meetings.roomid = Room.id AND Meetings.reserveddate BETWEEN '${startdate}' AND '${enddate}')`), 'usage']
            ]
        });
        res.send(stats);
    }
};


module.exports = { sendFeedback, getRoomStats };
