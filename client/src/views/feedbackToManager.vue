
<template>
  <div class="container mt-5">
    <label>Phản hồi</label>
    <b-form-textarea
      id="textarea-rows"
      placeholder="Viết phản hồi của bạn vào đây..."
      rows="8"
      v-model="this.messageContent"
    ></b-form-textarea>
    <input type="submit" @click.prevent="sendFeedback()" value="Gửi" />
  </div>
</template>

<script>
import { feedBackAPI } from "@/services/user.apiServices.js";

export default {
  name: "Feedback",
  data() {
    return {
      messageContent: "",
    };
  },
  methods: {
    sendFeedback() {
      feedBackAPI(this.messageContent)
        .then((res) => {
          console.log(res);
          this.$swal.fire(
            "Thành công!",
            "Gửi góp ý đến nhà phát triển thành công",
            "success"
          );
          this.messageContent = "";
        })
        .catch((err) => {
          if (err.response.status === 403) {
            this.$swal.fire("Tin nhắn không được để trống", "", "failed");
          }
          console.log(err);
        });
    },
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