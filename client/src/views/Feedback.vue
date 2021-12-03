<template>
  <div class="container">
    <!-- <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Your Name" />
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email"
      /> -->
    <label>Phản hồi</label>
    Đánh giá phòng theo thang điểm 10
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="reviewContent.rating"
    >
      <option selected>Đánh giá phòng</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <!-- <textarea
      name="message"
      v-model="message"
      cols="30"
      rows="5"
      v-model="reviewContent.message"
    > -->
    <!-- </textarea -->
    <b-form-textarea
      id="textarea-rows"
      placeholder="Viết phản hồi của bạn vào đây..."
      rows="8"
      v-model="reviewContent.message"
    ></b-form-textarea>
    >

    <input type="submit" @click.prevent="sendReview()" value="Gửi" />
    <div class="col-sm-5 col-md-6 col-12 pb-4">
      <h1>Danh sách phản hồi của bạn</h1>
      <div
        class="comment mt-4 text-justify darker float-left"
        v-for="review in listOfReviews"
        :key="review.id"
      >
        <h4>{{ review.room.roomname }}</h4>
        <span>Rating: {{ review.rating }}/10</span> <br />
        <p>
          {{ review.message }}
        </p>
        <b-button variant="secondary" @click="editReview()">Edit</b-button>
        <b-button variant="danger" @click="deleteReview(review.id)"
          >Delete</b-button
        >
        <!-- <b-button variant="secondary">Warning</b-button> -->
      </div>
    </div>
  </div>
</template>

<script>
//import { feedBackAPI } from "@/services/user.apiServices.js";
import { postReviewAPI } from "@/services/room.apiServices.js";
import {
  getSelfReviewAPI,
  deleteReviewAPI,
} from "@/services/review.apiServices.js";

export default {
  name: "Feedback",
  data() {
    // return {
    //   name: "",
    //   email: "",
    //   message: "",
    // };
    return {
      reviewContent: {
        roomid: "2",
        rating: "",
        message: "",
      },
      listOfReviews: [],
    };
  },
  methods: {
    sendReview() {
      postReviewAPI(this.reviewContent)
        .then((res) => {
          console.log(res);
          //this.reviewContent.push(res.data);
          //this.reviewContent.roomid = "";
          this.$swal.fire(
            "Gửi phản hồi cho người quản lý phòng họp thành công",
            "",
            "success"
          );
          this.reviewContent.message = "";
          this.reviewContent.rating = "";
        })
        .catch((err) => {
          console.log(err);
        });
      // feedBackAPI(this.message)
      //   .then((res) => {
      //     console.log(res);
      //     this.$swal.fire("Good job!", "gui feedback thanh cong", "success");
      //   })
      //   .catch((err) => {
      //     this.$swal.fire("No!", "gui feedback ko thanh cong", "error");
      //     console.log(err);
      //   });
    },
    editReview() {
      //do something
      return 0;
    },
    deleteReview(id) {
      this.$swal
        .fire({
          title: "Bạn có chắc muốn xóa phản hồi này chứ?",
          showDenyButton: true,
          confirmButtonText: "Có",
          denyButtonText: `Không`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            deleteReviewAPI(id)
              .then((res) => {
                console.log(res);
                this.$swal.fire("Xóa phản hồi thành công", "", "success");
                window.setTimeout(function () {
                  location.reload();
                }, 2000);
              })
              .catch((err) => {
                console.log(err);
              });
            // deleteRoomAPI(id)
            //   .then((res) => {
            //     console.log(res);
            //     this.$swal.fire("Xóa phản hồi thành công", "", "success");
            //     window.setTimeout(function () {
            //       location.reload();
            //     }, 2000);
            //   })
            //   .catch((err) => {
            //     this.$swal.fire("Xóa phản hồi không thành công", "", "failed");
            //     console.log(err);
            //   });
          }
        });
    },
  },
  async created() {
    getSelfReviewAPI()
      .then((res) => {
        console.log(res);
        this.listOfReviews = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>