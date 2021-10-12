const router = require('express').Router();
const Room = require('../controllers/room.controller');
const auth = require('../middlewares/auth');

router.get('/list', Room.getRoomList);
router.post('/create', auth, Room.createRoom);

module.exports = router;
