const Meeting = require('../models').Meeting;
const validation = require('../validations/meeting.validation');
const _ = require('lodash');

const createMeeting = async (req, res) => {
    const {error, value} = await validation.createSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message})
    } else {
        if (!req.user.isAdmin) {
            res.status(401).send({error: "User has no right to create  meeting"})
        } else {
            try {
                let available_meetings = await Meeting.findAll({
                    where: {
                        reserveddate: value.reserveddate,
                        roomid: value.roomid
                    }
                });
                let check = true;
                for (let meet of available_meetings) {
                    if (value.startingtime >= meet.startingtime && value.startingtime <= meet.startingtime + meet.during) {
                        check = false;
                        break;
                    }
                    if (value.startingtime <= meet.startingtime && value.startingtime + value.during >= meet.startingtime) {
                        check = false;
                        break;
                    }
                }
                if (check) {
                    if (!value.password) {
                        value.password = ""
                    }
                    let meeting = await Meeting.create(value);
                    res.send(_.pick(meeting, ['id', 'status']));
                } else {
                    res.status(400).send({error: "The time has been overlapped by another meeting"})
                }
            } catch (error) {
                res.status(400).send({error: error.message});
            }
        }
    }
};

const editMeeting = async (req, res) => {
    const {error, value} = await validation.editSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        if (!req.user.isAdmin) {
            res.status(401).send({error: "User has no right to edit the meeting"})
        } else {
            try {
                let original = await Meeting.findOne({
                    where: {
                        id: value.id
                    }
                });
                if (!original) {
                    res.status(400).send({ error: "Meeting not found" });
                } else {
                    // Check if modifying is valid
                    let reserveddate = value.reserveddate;
                    let startingtime = value.startingtime;
                    let during = value.during;
                    if (reserveddate == null) {
                        reserveddate = original.reserveddate;
                    }
                    if (startingtime == null) {
                        startingtime = original.startingtime;
                    }
                    if (during == null) {
                        during = original.during;
                    }
                    let available_meetings = await Meeting.findAll({
                        where: {
                            reserveddate: value.reserveddate,
                            roomid: value.roomid
                        }
                    });
                    let check = true;
                    for (let meet in available_meetings) {
                        if (value.startingtime >= meet.startingtime && value.startingtime <= meet.startingtime + meet.during) {
                            check = false;
                        }
                    }
                    if (check) {
                        await Meeting.update(_.omit(value, ['id']), {
                            where: {
                                id: value.id
                            }
                        });
                        res.send();
                    } else {
                        res.status(400).send({error: "The time has been overlapped by another meeting"})
                    }
                }
            } catch(error) {
                res.status(400).send({ error: error.message });
            }
        }
    }
};

const deleteMeeting = async (req, res) => {
    const {error, value} = await validation.deleteSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        if (!req.user.isAdmin) {
            res.status(401).send({ error: "User has no right to delete meeting" });
        } else {
            try {
                let meeting = await Meeting.findOne({
                    where: {
                        id: value.id
                    }
                });
                if (!meeting) {
                    res.status(404).send({ error: "Meeting not found "});
                } else if (meeting.adminid != req.user.id) {
                    res.status(401).send({ error: "User has no right to delete this room" });
                } else {
                    await Meeting.destroy({
                        where: {
                            id: value.id
                        }
                    });
                    res.send();
                }
            } catch(error) {
                res.status(400).send({ error: error.message });
            }
        }
    }
};

const getMeetingInfo = async (req, res) => {
    const {error, value} = await validation.infoSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message});
    } else {
        try {
            let meeting = await Meeting.findOne({
                where: {
                    id: value.id
                }
            });
            if (!meeting) {
                res.status(404).send({error: "Meeting not found"});
            } else {
                res.send(_.pick(meeting, 
                    ['adminid', 'roomid', 'reserveddate', 'startingtime', 'during', 'title', 'content', 'status']));
            }
        } catch (error) {
            res.status(400).send({error: error.message});
        }
    }
};

module.exports = { createMeeting, editMeeting, deleteMeeting, getMeetingInfo };
