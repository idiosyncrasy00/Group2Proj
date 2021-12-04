const encrypt = require('../utilities/encrypt');

module.exports = {
    up: async (db) => {
        await db.Room.bulkCreate([{
            id: 1,
            roomname: "Phòng 101",
            capacity: 100,
            facilities: "Điều hòa, máy chiếu",
            status: "Đang hoạt động"
        }, {
            id: 2,
            roomname: "Phòng 102",
            capacity: 50,
            facilities: "Máy chiếu",
            status: "Đang hoạt động"
        }, {
            id: 3,
            roomname: "Phòng 103",
            capacity: 150,
            facilities: "Máy chiếu",
            status: "Đang hoạt động"
        }]);
        await db.User.bulkCreate([{
            id: 11,
            firstname: "Đức",
            lastname: "Hoàng",
            email: "inconsolable789@gmail.com",
            dob: "2000-01-01",
            phone: "7605325323",
            address: "99 Cầu Giấy",
            username: "person1",
            password: await encrypt.generate("person1")
        }, {
            id: 12,
            firstname: "Quang",
            lastname: "Anh",
            email: "randomemail@gmail.com",
            dob: "2000-01-20",
            phone: "1325468452",
            address: "24 Hoàng Văn Thụ",
            username: "admin",
            password: await encrypt.generate("admin"),
            isadmin: true
        }, {
            id: 13,
            firstname: "Thanh",
            lastname: "Phương",
            email: "19021346@vnu.edu.vn",
            dob: "2001-05-11",
            phone: "1325484212",
            address: "15 Xuân Thủy",
            username: "person2",
            password: await encrypt.generate("person2")
        }, {
            id: 14,
            firstname: "Xuân",
            lastname: "Hải",
            email: "gmxancrazy24114@gmail.com",
            dob: "2001-01-24",
            phone: "5462158745",
            address: "40 Hồ Tùng Mậu",
            username: "person3",
            password: await encrypt.generate("person3")
        }]);
        await db.Meeting.bulkCreate([{
            id: 101,
            adminid: 12,
            roomid: 1,
            reserveddate: "2021-12-01",
            startingtime: 7,
            during: 2,
            title: "Hội nghị tập huấn",
            content: "Tập huấn kỹ năng phòng chống Covid 19",
            password: "",
            status: "Đang chờ"
        }, {
            id: 102,
            adminid: 11,
            roomid: 3,
            reserveddate: "2021-12-02",
            startingtime: 11,
            during: 3,
            title: "Họp tổng kết năm",
            content: "Tổng kết năm học",
            password: "",
            status: "Đang chờ"
        }, {
            id: 103,
            adminid: 13,
            roomid: 3,
            reserveddate: "2021-12-03",
            startingtime: 11,
            during: 3,
            title: "Họp lớp cấp 3",
            content: "Họp lớp cấp 3 khóa 2016-2019",
            password: "",
            status: "Đang chờ"
        }, {
            id: 104,
            adminid: 12,
            roomid: 1,
            reserveddate: "2021-12-04",
            startingtime: 9,
            during: 2,
            title: "Họp nâng lương",
            content: "Nâng lương trước thời hạn",
            password: "",
            status: "Đang diễn ra"
        }]);
        await db.Participant.bulkCreate([{
            meetingid: 101,
            userid: 11,
            isaccepting: false
        }, {
            meetingid: 101,
            userid: 13,
            isaccepting: true
        }, {
            meetingid: 102,
            userid: 12,
            isaccepting: true
        }, {
            meetingid: 103,
            userid: 12,
            isaccepting: false
        }, {
            meetingid: 104,
            userid: 11,
            isaccepting: true
        }, {
            meetingid: 104,
            userid: 14,
            isaccepting: true
        }, {
            meetingid: 104,
            userid: 13,
            isaccepting: true
        }]);
        await db.Feedback.bulkCreate([{
            id: 21,
            userid: 12,
            message: "Tính năng tạo cuộc họp vẫn còn nhiều lỗi",
            time: "2021-11-23 09:50:18"
        }]);
        await db.Review.bulkCreate([{
            id: 31,
            userid: 11,
            roomid: 1,
            rating: 7,
            message: "Phòng họp hơi chật nhưng vẫn đủ để dùng",
            time: "2021-11-23 09:50:18"
        }, {
            id: 32,
            userid: 12,
            roomid: 3,
            rating: 10,
            message: "Phòng họp sạch sẽ, thoáng mát. Cơ sở vật chất tiện nghi",
            time: "2021-11-24 09:50:18"
        }, {
            id: 33,
            userid: 13,
            roomid: 1,
            rating: 3,
            message: "Phòng họp vẫn còn bẩn, không đủ ánh sáng",
            time: "2021-11-25 09:50:18"
        }]);
        // Run loader
        await require('./loader').reloadRating();
    },

    down: async (db) => {
        await db.Participant.destroy({
            where: {
                meetingid: [101, 102, 103]
            }
        });
        await db.Meeting.destroy({
            where: {
                id: [101, 102, 103]
            }
        });
        await db.Feedback.destroy({
            where: {
                id: [21]
            }
        });
        await db.Review.destroy({
            where: {
                id: [31, 32, 33]
            }
        });
        await db.Room.destroy({
            where: {
                id: [1, 2, 3]
            }
        });
        await db.User.destroy({
            where: {
                id: [11, 12, 13, 14]
            }
        });
    }
};
