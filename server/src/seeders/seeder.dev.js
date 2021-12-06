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
            firstname: "Quang",
            lastname: "Anh",
            email: "quanganh124@gmail.com",
            dob: "2000-01-01",
            phone: "0760532533",
            address: "99 Cầu Giấy",
            username: "person1",
            password: await encrypt.generate("person1")
        }, {
            id: 12,
            firstname: "Đức",
            lastname: "Hoàng",
            email: "inconsolable789@gmail.com",
            dob: "2000-01-20",
            phone: "0132546852",
            address: "24 Hoàng Văn Thụ",
            username: "person2",
            password: await encrypt.generate("person2"),
        }, {
            id: 13,
            firstname: "Thanh",
            lastname: "Phương",
            email: "19021346@vnu.edu.vn",
            dob: "2001-05-11",
            phone: "0132548421",
            address: "15 Xuân Thủy",
            username: "person4",
            password: await encrypt.generate("person4")
        }, {
            id: 14,
            firstname: "Xuân",
            lastname: "Hải",
            email: "gmxancrazy24114@gmail.com",
            dob: "2001-01-24",
            phone: "0546215845",
            address: "40 Hồ Tùng Mậu",
            username: "person3",
            password: await encrypt.generate("person3")
        }, {
            id: 15,
            firstname: "Xuân",
            lastname: "Thủy",
            email: "xuanthuy123@gmail.com",
            dob: "2001-05-06",
            phone: "0419277487",
            address: "68 Phạm Hùng",
            username: "admin",
            password: await encrypt.generate("admin"),
            isadmin: true
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
            roomid: 1,
            reserveddate: "2021-12-02",
            startingtime: 11,
            during: 3,
            title: "Họp tổng kết năm",
            content: "Tổng kết năm học 2020-2021",
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
        }, {
            id: 105,
            roomid: 2,
            adminid: 11,
            reserveddate: "2021-12-16",
            startingtime: 14,
            during: 2,
            title: "Họp hội đồng quản trị",
            content: "Triển khai các dự án trọng điểm trong năm tới.",
            password: "",
            status: "Đang chờ"
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
            meetingid: 102,
            userid: 14,
            isaccepting: true
        }, {
            meetingid: 102,
            userid: 13,
            isaccepting: true
        }]);
        await db.Feedback.bulkCreate([{
            id: 21,
            userid: 12,
            message: "Tính năng tạo cuộc họp vẫn còn nhiều lỗi",
            time: "2021-11-23"
        }]);
        await db.Review.bulkCreate([{
            id: 31,
            userid: 11,
            roomid: 1,
            rating: 7,
            message: "Phòng họp hơi chật nhưng vẫn đủ để dùng",
            time: "2021-11-23"
        }, {
            id: 32,
            userid: 12,
            roomid: 3,
            rating: 10,
            message: "Phòng họp sạch sẽ, thoáng mát. Cơ sở vật chất tiện nghi",
            time: "2021-11-24"
        }, {
            id: 33,
            userid: 13,
            roomid: 1,
            rating: 3,
            message: "Phòng họp vẫn còn bẩn, không đủ ánh sáng",
            time: "2021-11-25"
        }]);
        // Run loader
        await require('./loader').reloadRating();
    },

    down: async (db) => {
        await db.Participant.destroy({
            where: {
                meetingid: [101, 102, 103, 104, 105]
            }
        });
        await db.Meeting.destroy({
            where: {
                id: [101, 102, 103, 104, 105]
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
                id: [11, 12, 13, 14, 15]
            }
        });
    }
};
