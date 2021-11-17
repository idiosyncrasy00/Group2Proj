const encrypt = require('../utilities/encrypt');

module.exports = {
    up: async (db) => {
        await db.Room.bulkCreate([{
            id: 1,
            roomname: "Room 1",
            capacity: 100,
            facilities: "Air conditioner, projector",
            status: "WORKING"
        }, {
            id: 2,
            roomname: "Room 2",
            capacity: 50,
            facilities: "Nothing",
            status: "FIXING"
        }, {
            id: 3,
            roomname: "Room 3",
            capacity: 150,
            facilities: "Projector",
            status: "WORKING"
        }]);
        await db.User.bulkCreate([{
            id: 11,
            firstname: "Polly",
            lastname: "Hastings",
            email: "j25eudq6bgi@temporary-mail.net",
            dob: "1989-09-29",
            phone: "7605325323",
            address: "4269 Fincham Road",
            username: "rahsaan",
            password: await encrypt.generate("rahsaan")
        }, {
            id: 12,
            firstname: "Daniel",
            lastname: "Olsa",
            email: "randomemail@gmail.com",
            dob: "2000-01-20",
            phone: "1325468452",
            address: "164 Manchester",
            username: "test1234",
            password: await encrypt.generate("test1234")
        }, {
            id: 13,
            firstname: "Larry",
            lastname: "South",
            email: "randomemail2@gmail.com",
            dob: "2001-05-11",
            phone: "1325484212",
            address: "4712 Joy Lane",
            username: "test12345",
            password: await encrypt.generate("test12345")
        }]);
        await db.Meeting.bulkCreate([{
            id: 101,
            adminid: 12,
            roomid: 1,
            reserveddate: "2021-01-01",
            startingtime: 7,
            during: 2,
            title: "Friendly meeting",
            content: "Birthday",
            password: "",
            status: "WAITING"
        }, {
            id: 102,
            adminid: 11,
            roomid: 3,
            reserveddate: "2021-01-01",
            startingtime: 11,
            during: 3,
            title: "Family meeting",
            content: "Gender reveal",
            password: "family",
            status: "WAITING"
        }, {
            id: 103,
            adminid: 13,
            roomid: 3,
            reserveddate: "2021-01-02",
            startingtime: 11,
            during: 3,
            title: "Old class meeting",
            content: "",
            password: "123",
            status: "WAITING"
        }]);
    },

    down: async (db) => {
        await db.Room.destroy({
            where: {
                id: [1, 2, 3]
            }
        });
        await db.User.destroy({
            where: {
                id: [11, 12, 13]
            }
        });
        await db.Meeting.destroy({
            where: {
                id: [101, 102, 103]
            }
        });
    }
};
