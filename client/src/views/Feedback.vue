<template>
  <div class="container mt-5">
    <div v-if="this.showForm">
      <label>Chọn phòng</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="this.reviewContent.roomid"
      >
        <option
          selected
          v-for="room in this.roomList"
          :key="room.id"
          :value="room.id"
        >
          {{ room.roomname }}
        </option>
        <!-- <option value="1">{{ room.roomname }}</option> -->
      </select>
      <label>Đánh giá phòng theo thang điểm 10</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="reviewContent.rating"
      >
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
      <label>Phản hồi</label>
      <b-form-textarea
        id="textarea-rows"
        placeholder="Viết phản hồi của bạn vào đây..."
        rows="8"
        v-model="reviewContent.message"
      ></b-form-textarea>
      <input
        type="submit"
        @click.prevent="sendReview()"
        value="Gửi"
        style="height: 3rem"
      />
      <button
        type="submit"
        @click.prevent="this.showForm = 0"
        class="btn btn-secondary"
        style="height: 3rem; margin-left: 2rem"
      >
        Danh sách phản hồi
      </button>
    </div>
    <div v-if="!this.showForm">
      <div class="col-sm-10 mx-auto pb-4">
        <h3 style="margin-bottom: 3rem">Danh sách phản hồi của bạn</h3>
        <div
          class="comment mt-4 darker row"
          v-for="review in listOfReviews"
          :key="review.id"
        >
          <div class="col-sm-4">
            <h5>{{ review.room.roomname }}</h5>
            <span>Điểm đánh giá: {{ review.rating }}/10</span> <br />
          </div>
          <div class="col-sm-7">
            <p>
              {{ review.message }}
            </p>
          </div>
          <div class="col-sm-1">
            <b-button variant="danger" @click="deleteReview(review.id)"
              >Xóa</b-button
            >
          </div>
        </div>
        <b-button
          variant="secondary"
          @click="this.showForm = 1"
          style="width: 5rem; margin-top: 3rem"
          >Trở về</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
//import { feedBackAPI } from "@/services/user.apiServices.js";
import {
  postReviewAPI,
  //getMeetingListAPI,
  //getInvitedMeetingsListAPI,
} from "@/services/room.apiServices.js";
import {
  getSelfReviewAPI,
  //editReviewAPI,
  deleteReviewAPI,
} from "@/services/review.apiServices.js";
import { getRoomListAPI } from "@/services/room.apiServices.js";

export default {
  name: "Feedback",
  data() {
    // return {
    //   name: "",
    //   email: "",
    //   message: "",
    // };
    return {
      showForm: true,
      roomList: [],
      reviewContent: {
        roomid: "",
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
    getRoomListAPI()
      .then((res) => {
        console.log(res);
        this.roomList = res.data;
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
.comment {
  border-bottom: thin lightgray solid;
}
</style>