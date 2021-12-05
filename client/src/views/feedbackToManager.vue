
<template>
  <div class="container mt-5">
    <label>Phản hồi</label>
    <b-form-textarea
      id="textarea-rows"
      placeholder="Viết phản hồi của bạn vào đây..."
      rows="8"
      v-model="reviewContent.message"
    ></b-form-textarea>
    <input type="submit" @click.prevent="sendReview()" value="Gửi" />
	</div>
</template>

<script>

import {
  postReviewAPI,
} from "@/services/room.apiServices.js";
import {
  getSelfReviewAPI,
  deleteReviewAPI,
} from "@/services/review.apiServices.js";
import { getRoomListAPI } from "@/services/room.apiServices.js";

export default {
  name: "Feedback",
  data() {
    return {
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
</style>