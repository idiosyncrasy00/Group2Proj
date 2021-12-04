<template>
  <!--
<div style="max-width: 600px">
    <vue3-chart-js v-bind="{ ...barChart }" />
  </div>
  -->
  <div>
    <div id="tabs" class="container">
      <div class="tabs">
        <a
          v-on:click="activetab = 1"
          v-bind:class="[activetab === 1 ? 'active' : '']"
          >Ngày</a
        >
        <a
          v-on:click="activetab = 2"
          v-bind:class="[activetab === 2 ? 'active' : '']"
          >Tháng</a
        >
        <a
          v-on:click="activetab = 3"
          v-bind:class="[activetab === 3 ? 'active' : '']"
          >Năm</a
        >
      </div>
      <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
          <h1>Bảng thống kê</h1>
          <div class="container h-100">
            <div style="max-width: 600px">
              <b>Chọn ngày bạn muốn tra cứu</b> <br />
              <input type="date" v-model="date1" />
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                @click="getDayStatistics()"
              >
                Tra cứu
              </button>
              <br />
              <br />
              <hr />
              <!-- <vue3-chart-js v-bind="{ ...barChart }" /> -->
              <column-chart :data="this.roomList1"></column-chart>
            </div>
          </div>
        </div>

        <div v-if="activetab === 2" class="tabcontent">
          <h1>Bảng thống kê</h1>
          <div class="container h-100">
            <div style="max-width: 600px">
              <b>Chọn tháng bạn muốn tra cứu</b> <br />
              <input type="month" v-model="date2" />
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                @click="getMonthStatistics()"
              >
                Tra cứu
              </button>
              <br />
              <br />
              <hr />
              <column-chart :data="this.roomList2"></column-chart>
            </div>
          </div>
        </div>

        <div v-if="activetab === 3" class="tabcontent">
          <h1>Bảng thống kê</h1>
          <div class="container h-100">
            <div style="max-width: 600px">
              <b>Chọn năm bạn muốn tra cứu</b> <br />
              <input type="number" value="2021" />
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                @click="getYearStatistics()"
              >
                Tra cứu
              </button>
              <br />
              <br />
              <hr />
              <column-chart :data="this.roomList3"></column-chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Vue3ChartJs from "../../../node_modules/@j-t-mcc/vue3-chartjs";
import { getRoomStatsAPI } from "@/services/room.apiServices.js";

export default {
  name: "statistics",
  //mixins: [Bar],
  components: {
    //Vue3ChartJs,
  },
  data() {
    return {
      // date1: "yyyy-mm-dd",
      // date2: "yyyy-mm",
      // date3: "",
      date1: new Date().toISOString().slice(0, 10),
      date2: new Date().toISOString().slice(0, 7),
      date3: new Date().toISOString().slice(0, 4),
      activetab: 1,
      getroomList: [],
      roomList1: [
        // ["", 43435],
        // ["Mon", 46],
        // ["Tue", 28],
      ],
      roomList2: [
        // ["", 43435],
        // ["Mon", 46],
        // ["Tue", 28],
      ],
      roomList3: [
        // ["", 43435],
        // ["Mon", 46],
        // ["Tue", 28],
      ],
    };
  },
  methods: {
    getDayStatistics() {
      getRoomStatsAPI(this.date1)
        .then((res) => {
          console.log(res);
          for (var i = 0; i < res.data.length; i++) {
            this.roomList1.push([res.data[i].roomname, res.data[i].usage]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //console.log(this.roomList);
      //this.roomList = this.getroomList;
      console.log(this.getroomList);
    },
    getMonthStatistics() {
      getRoomStatsAPI(this.date2)
        .then((res) => {
          console.log(res);
          for (var i = 0; i < res.data.length; i++) {
            this.roomList2.push([res.data[i].roomname, res.data[i].usage]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //console.log(this.roomList);
      //this.roomList = this.getroomList;
      //console.log(this.getroomList)
    },
    getYearStatistics() {
      getRoomStatsAPI(this.date3)
        .then((res) => {
          console.log(res);
          for (var i = 0; i < res.data.length; i++) {
            this.roomList3.push([res.data[i].roomname, res.data[i].usage]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //console.log(this.roomList);
      //this.roomList = this.getroomList;
      //console.log(this.getroomList);
    },
  },
  // mounted() {
  //   this.renderChart(this.barChart)
  // },
  async created() {
    // getRoomStatsAPI(this.date1)
    //   .then((res) => {
    //     //console.log(res);
    //     for (var i = 0; i < res.data.length; i++) {
    //       this.roomList.push([res.data[i].roomname, res.data[i].usage]);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  setup() {},
};
</script>

<style>
a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 80%;
  min-width: 80%;
  margin: 40px auto;
}

.tabs {
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

.tabs a.active {
  background-color: var(--bg-color);
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

.tabcontent {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
.btn-circle.btn-lg,
.btn-group-lg > .btn-circle.btn {
  width: 50px;
  height: 50px;
  padding: 14px 15px;
  font-size: 18px;
  line-height: 23px;
}
.text-muted {
  color: #8898aa !important;
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
.btn-circle {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 10px;
}
.user-table tbody tr .category-select {
  max-width: 150px;
  border-radius: 20px;
}

* {
  box-sizing: border-box;
}

div.example input[type="text"] {
  padding: 8px;
  font-size: 14px;
  border: 2px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}
div.example button {
  padding: 8px;
  font-size: 14px;
  border: 2px solid grey;

  background: blue;
}
div.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>