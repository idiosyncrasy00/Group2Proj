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
        let startdate = "";
        let enddate = "";
        let date = new Date();
        if (value.type == "date") {
            startdate = date;
            enddate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        } else if (value.type == "month") {
            startdate = new Date(date.getFullYear(), date.getMonth(), 1);
            enddate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        } else {
            startdate = new Date(date.getFullYear(), 0, 1);
            enddate = new Date(date.getFullYear(), 12, 0);
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
