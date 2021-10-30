const Room = require('../models').Room;
const _ = require('lodash');

const getRoomList = async (req, res) => {
    try {
        const rooms = await Room.findAll({
            attributes: ['roomName', 'status']
        });
        res.send(rooms);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const createRoom = async (req, res) => {
    if (!req.user.isAdmin) {
        res.status(401).send({ error: "User has no right to create room" });
    } else {
        try {
            let room = await Room.create(req.body);
            res.send(_.pick(room, ['roomName', 'status']));
            console.log('Room created');
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
};

module.exports = { getRoomList, createRoom };
