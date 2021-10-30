const router = require('express').Router();
const Room = require('../controllers/room.controller');
const auth = require('../middlewares/auth');

router.post('/create', auth, Room.createRoom);
router.get('/list', auth, Room.getRoomList);
router.put('/edit', auth, Room.editRoom);

module.exports = router;
