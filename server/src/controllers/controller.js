const Review = require('../models').Review;
const Room = require('../models').Room;


async function calculateRating(roomid) {
    let reviews = await Review.findAll({
        where: {
            roomid: roomid
        }
    });
    if (reviews.length == 0) {
        await Room.update({ rating: 10 }, {
            where: {
                id: roomid
            }
        });
    } else {
        let sums = 0;
        reviews.forEach(i => sums += i['rating']);
        let rating = Math.round(sums / reviews.length);
        await Room.update({ rating: rating }, {
            where: {
                id: roomid
            }
        });
    }
}


module.exports = { calculateRating };
