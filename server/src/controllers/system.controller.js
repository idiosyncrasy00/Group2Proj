const Feedback = require('../models').Feedback;
const validation = require('../validations/system.validation');
const sequelize = require('../models').sequelize;


const sendFeedback = async (req, res) => {
    const {error, value} = await validation.feedbackSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message});
    } else {
        await Feedback.create({
            userid: req.user.id,
            message: value.message,
            time: sequelize.fn('NOW')
        });
        res.send();
    }
};


module.exports = { sendFeedback };