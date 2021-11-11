const router = require('express').Router();
const Participant = require('../controllers/participant.controller');
const auth = require('../middlewares/auth');

router.post('/invite', auth, Participant.inviteParticipant);

module.exports = router;