const router = require('express').Router();
const Participant = require('../controllers/participant.controller');
const auth = require('../middlewares/auth');

router.post('/invite', auth, Participant.inviteParticipant);
router.post('/invitemany', auth, Participant.inviteManyParticipant);
router.delete('/delete', auth, Participant.deleteParticipant);
router.post('/feedback', auth, Participant.feedbackMeeting);
router.post('/leave', auth, Participant.leaveMeeting);

module.exports = router;