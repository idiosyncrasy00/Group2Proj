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


module.exports = { inviteParticipant };
