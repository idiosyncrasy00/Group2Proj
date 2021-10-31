const encrypt = require('../utilities/encrypt');

module.exports = {
    up: async (db) => {
        await db.Room.bulkCreate([{
            roomname: "Room 1",
            capacity: 100,
            facilities: "Air conditioner, projector",
            status: "WORKING"
        }, {
            roomname: "Room 2",
            capacity: 50,
            facilities: "Nothing",
            status: "FIXING"
        }, {
            roomname: "Room 3",
            capacity: 150,
            facilities: "Projector",
            status: "WORKING"
        }]);
        await db.User.bulkCreate([{
            firstname: "Polly",
            lastname: "Hastings",
            email: "j25eudq6bgi@temporary-mail.net",
            dob: "1989-09-29",
            phone: "7605325323",
            address: "4269 Fincham Road",
            username: "rahsaan",
            password: await encrypt.generate("rahsaan")
        }, {
            firstname: "Daniel",
            lastname: "Olsa",
            email: "randomemail@gmail.com",
            dob: "2000-01-20",
            phone: "1325468452",
            address: "164 Manchester",
            username: "test1234",
            password: await encrypt.generate("test1234")
        }])
    },

    down: async (db) => {
        await db.Room.destroy({
            where: {
                roomname: ["Room 1", "Room 2", "Room 3"]
            }
        });
        await db.User.destroy({
            where: {
                username: ["rahsaan", "test1234"]
            }
        })
    }
};
