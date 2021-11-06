const Meeting = require('../models').Meeting;
const validation = require('../validations/meeting.validation');
const _ = require('lodash');


const createMeeting = async (req, res) => {
    const {error, value} = await validation.createSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message})
    } else {
        if (!req.user.isAdmin) {
            res.status(401).send({error: "User has no right to create meeting"})
        } else {
            try {
                let meeting = await Meeting.create(value);
                res.send(_.pick(meeting, ['id', 'status']));
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
            res.status(401).send({error: "User has no right to create meeting"})
        } else {
            try {
                await Meeting.update(_.omit(value, ['id']), {
                    where: {
                        id: value.id
                    }
                });
                res.send();
            } catch(error) {
                res.status(400).send({ error: error.message });
            }
        }
    }
};

module.exports = { createMeeting, editMeeting };
