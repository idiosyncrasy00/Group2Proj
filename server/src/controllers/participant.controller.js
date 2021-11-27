const models = require('../models');
const Participant = models.Participant;
const Meeting = models.Meeting;
const validation = require('../validations/participant.validation');
const _ = require('lodash');


const inviteParticipant = async (req, res) => {
    const {error, value} = await validation.inviteSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        let meeting = await Meeting.findOne({
            where: {
                id: value.meetingid
            }
        });
        if (meeting === null) {
            res.status(404).send({ error: "Meeting not found" });
        } else if (req.user.id !== meeting.adminid) {
            console.log("userid: ", req.user);
            console.log("meeting admin: ", meeting.adminid);
            res.status(401).send({ error: "User is not meeting admin" });
        } else {
            try {
                await Participant.create({
                    meetingid: value.meetingid,
                    userid: value.userid,
                    isaccepting: false
                });
                res.send();
            } catch(error) {
                res.status(400).send({ error: error.message });
            }
        }
    }
};

const inviteManyParticipant = async (req, res) => {
    const {error, value} = await validation.inviteManySchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        let meeting = await Meeting.findOne({
            where: {
                id: value.meetingid
            }
        });
        if (meeting === null) {
            res.status(404).send({ error: "Meeting not found" });
        } else if (req.user.id !== meeting.adminid) {
            res.status(401).send({ error: "User is not meeting admin" });
        } else {
            // Create participant row
            const success = [];
            const failed = [];
            for await (const pid of value.participants) {
                try {
                    await Participant.create({
                        meetingid: value.meetingid,
                        userid: pid,
                        isaccepting: false
                    });
                    success.push(pid);
                } catch(error) {
                    failed.push(pid);
                }
            }
            res.send({
                success: success,
                failed: failed
            });
        }
    }
};

const deleteParticipant = async (req, res) => {
    const {error, value} = await validation.deleteSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        let meeting = await Meeting.findOne({
            where: {
                id: value.meetingid
            }
        });
        if (meeting === null) {
            res.status(404).send({ error: "Meeting not found" });
        } else if (req.user.id !== meeting.adminid) {
            res.status(401).send({ error: "User is not meeting admin" });
        } else {
            try {
                await Participant.destroy({
                    where: {
                        meetingid: value.meetingid,
                        userid: value.userid
                    }
                });
                res.send();
            } catch(error) {
                res.status(400).send({ error: error.message });
            }
        }
    }
};

const feedbackMeeting = async (req, res) => {
    const {error, value} = await validation.feedbackSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        let participant = await Participant.findOne({
            where: {
                meetingid: value.meetingid,
                userid: req.user.id
            }
        });
        if (!participant) {
            res.status(400).send({ error: "Meeting not found or user is not in meeting" });
        } else {
            await participant.update({
                feedback: value.message
            });
            res.send();
        }
    }
};


module.exports = { inviteParticipant, inviteManyParticipant, deleteParticipant, feedbackMeeting };
