const Room = require('../models').Room;
const _ = require('lodash');
const validation = require('../validations/room.validation');

const createRoom = async (req, res) => {
    const { error, value } = await validation.createSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        if (!req.user.isAdmin) {
            res.status(401).send({ error: "User has no right to create room" });
        } else {
            try {
                let room = await Room.create(value);
                res.send(_.pick(room, ['id', 'roomname']));
                console.log('Room created');
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        }
    }
};

const editRoom = async (req, res) => {
    const { error, value } = await validation.editSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        if (!req.user.isAdmin) {
            res.status(401).send({ error: "User has no right to edit room" });
        } else {
            try {
                await Room.update(_.omit(value, ['id']), {
                    where: {
                        id: value.id
                    }
                });
                res.send();
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        }
    }
};

const getRoomList = async (req, res) => {
    try {
        const rooms = await Room.findAll({
            attributes: ['id', 'roomname', 'capacity', 'facilities', 'status']
        });
        res.send(rooms);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// const createRoom = async (req, res) => {
//     if (!req.user.isAdmin) {
//         res.status(401).send({ error: "User has no right to create room" });
//     } else {
//         try {
//             let room = await Room.create(req.body);
//             res.send(_.pick(room, ['roomName', 'status']));
//             console.log('Room created');
//         } catch (error) {
//             res.status(400).send({ error: error.message });
//         }
//     }
// };

module.exports = { getRoomList, createRoom };
module.exports = { createRoom, getRoomList, editRoom };
