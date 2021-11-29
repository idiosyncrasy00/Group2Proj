const Review = require('../models').Review;
const sequelize = require('../models').sequelize;
const validation = require('../validations/review.validation');
const _ = require('lodash');


const addReview = async (req, res) => {
    const {error, value} = await validation.addSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message});
    } else {
        try {
            let review = await Review.create({
                userid: req.user.id,
                roomid: value.roomid,
                rating: value.rating,
                message: value.message,
                time: sequelize.fn('NOW')
            });
            res.send(_.pick(review, ['id', 'userid', 'roomid', 'rating', 'message']));
        } catch(error) {
            res.status(400).send({ error: error.message });
        }
    }
};

const editReview = async (req, res) => {
    const {error, value} = await validation.editSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message});
    } else {
        let review = await Review.findOne({
            where: {
                id: value.id
            }
        });
        if (!review) {
            res.status(400).send({ error: "Review not found" });
        } else if (review.userid != req.user.id) {
            res.status(401).send({ error: "Cannot edit this review" });
        } else {
            try {
                await review.update(_.omit(value, ['id']), {
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

const deleteReview = async (req, res) => {
    const {error, value} = await validation.deleteSchema.validate(req.body);
    if (error) {
        res.status(403).send({error: error.message});
    } else {
        let review = await Review.findOne({
            where: {
                id: value.id
            }
        });
        if (!review) {
            res.status(400).send({ error: "Review not found" });
        } else if (review.userid != req.user.id) {
            res.status(401).send({ error: "Cannot delete this review" });
        } else {
            try {
                await Review.destroy({
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

const getReview = async (req, res) => {
    let reviews = await Review.findAll({
        attributes: ['id', 'roomid', 'rating', 'message', 'time'],
        where: {
            userid: req.user.id
        }
    });
    res.send(reviews);
};


module.exports = { addReview, editReview, deleteReview, getReview };
