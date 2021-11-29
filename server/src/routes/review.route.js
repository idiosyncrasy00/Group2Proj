const router = require('express').Router();
const Review = require('../controllers/review.controller');
const auth = require('../middlewares/auth');

router.post('/add', auth, Review.addReview);
router.put('/edit', auth, Review.editReview);
router.delete('/delete', auth, Review.deleteReview);
router.get('/get', auth, Review.getReview);

module.exports = router;
