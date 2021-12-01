// Loader module: run afer seeder

const controller = require('../controllers/controller');
const Room = require('../models').Room;


async function reloadRating() {
    let rooms = await Room.findAll();
    for (const room of rooms) {
        await controller.calculateRating(room['id']);
    }
}


module.exports = { reloadRating };
