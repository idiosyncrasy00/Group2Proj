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
          v-bind:class="[activetab === 1 || activetab === '' ? 'active' : '']"
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
          <h4>Bảng thống kê</h4>
          <div class="container h-100">
            <div class="mx-auto" style="max-width: 80%">
              <b>Chọn ngày bạn muốn tra cứu</b>
              <br />
              <div class="row">
                <input type="date" class="col-sm-4" v-model="date1" />
                <button
                  type="button"
                  class="btn btn-secondary btn-sm col-sm-2"
                  @click="getDayStatistics()"
                >
                  Tra cứu
                </button>
              </div>
              <br />
              <br />
              <hr />
              <!-- <vue3-chart-js v-bind="{ ...barChart }"/> -->
              <!-- <ChartUI :data="thí"/> -->
              <column-chart
                class="w-100"
                :data="this.roomList1"
                :min="0"
                :max="this.getMax"
                xtitle="Tên phòng họp"
                ytitle="Số lần đặt phòng"
              ></column-chart>
            </div>
          </div>
        </div>

        <div v-if="activetab === 2" class="tabcontent">
          <h4>Bảng thống kê</h4>
          <div class="container h-100">
            <div class="mx-auto" style="max-width: 80%">
              <b>Chọn tháng bạn muốn tra cứu</b> <br />
              <div class="row">
                <input type="month" class="col-sm-4" v-model="date2" />
                <button
                  type="button"
                  class="btn btn-secondary btn-sm col-sm-2"
                  @click="getMonthStatistics()"
                >
                  Tra cứu
                </button>
              </div>
              <br />
              <br />
              <hr />
              <column-chart
                :data="this.roomList2"
                :min="0"
                :max="this.getMax"
                xtitle="Tên phòng họp"
                ytitle="Số lần đặt phòng"
              ></column-chart>
            </div>
          </div>
        </div>

        <div v-if="activetab === 3" class="tabcontent">
          <h4>Bảng thống kê</h4>
          <div class="container h-100">
            <div class="mx-auto" style="max-width: 80%">
              <b>Chọn năm bạn muốn tra cứu</b> <br />
              <div class="row">
                <input type="number"  min="2000" max="2099" class="col-sm-4" v-model="date3" />
                <button
                  type="button"
                  class="btn btn-secondary btn-sm col-sm-2"
                  @click="getYearStatistics()"
                >
                  Tra cứu
                </button>
              </div>
              <br />
              <br />
              <hr />
              <column-chart
                :data="this.roomList3"
                :min="0"
                :max="this.getMax"
                xtitle="Tên phòng họp"
                ytitle="Số lần đặt phòng"
              ></column-chart>
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
  components: {},
  data() {
    return {
      // date1: "yyyy-mm-dd",
      // date2: "yyyy-mm",
      // date3: "",
      getMax: JSON.parse(localStorage.getItem("getMaxValue")) || 2,
      date1: JSON.parse(localStorage.getItem("input1")),
      date2: JSON.parse(localStorage.getItem("input2")),
      date3: JSON.parse(localStorage.getItem("input3")) || 2021,
      activetab: JSON.parse(localStorage.getItem("activetab")) || 1,
      roomList1: JSON.parse(localStorage.getItem("getstatistic1")),
      roomList2: JSON.parse(localStorage.getItem("getstatistic2")),
      roomList3: JSON.parse(localStorage.getItem("getstatistic3")),
    };
  },
  methods: {
    getDayStatistics() {
      if (localStorage.getItem("getstatistic1") != "") {
        localStorage.removeItem("getstatistic1");
      }
      var temp = [];
      //var temp_activetab = 1;
      getRoomStatsAPI(this.date1)
        .then((res) => {
          var max = 2;
          for (var i = 0; i < res.data.length; i++) {
            temp.push([res.data[i].roomname, res.data[i].usage]);
            if (res.data[i].usage > max) {
              max = res.data[i].usage;
            }
          }
          console.log(max);
          console.log(res);
          localStorage.setItem("getMaxValue", max.toString());
          localStorage.setItem("getstatistic1", JSON.stringify(temp));
          localStorage.setItem("activetab", 1);
          localStorage.setItem("input1", JSON.stringify(this.date1));
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      // //console.log(this.roomList);
      // //this.roomList = this.getroomList;
      // console.log(this.getroomList);
    },
    getMonthStatistics() {
      if (localStorage.getItem("getstatistic2") != "") {
        localStorage.removeItem("getstatistic2");
      }
      var temp = [];
      getRoomStatsAPI(this.date2)
        .then((res) => {
          var max = 2;
          for (var i = 0; i < res.data.length; i++) {
            temp.push([res.data[i].roomname, res.data[i].usage]);
            if (res.data[i].usage > max) {
              max = res.data[i].usage;
            }
          }
          console.log(max);
          console.log(res);
          localStorage.setItem("getMaxValue", max.toString());
          localStorage.setItem("getstatistic2", JSON.stringify(temp));
          localStorage.setItem("activetab", 2);
          localStorage.setItem("input2", JSON.stringify(this.date2));
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      //console.log(this.roomList);
      //this.roomList = this.getroomList;
      //console.log(this.getroomList)
    },
    getYearStatistics() {
      if (localStorage.getItem("getstatistic3") != "") {
        localStorage.removeItem("getstatistic3");
      }
      var temp = [];
      getRoomStatsAPI(JSON.stringify(this.date3))
        .then((res) => {
          var max = 2;
          for (var i = 0; i < res.data.length; i++) {
            temp.push([res.data[i].roomname, res.data[i].usage]);
            if (res.data[i].usage > max) {
              max = res.data[i].usage;
            }
          }
          //console.log(res);
          console.log(max);
          localStorage.setItem("getMaxValue", max.toString());
          localStorage.setItem("getstatistic3", JSON.stringify(temp));
          localStorage.setItem("activetab", 3);
          localStorage.setItem("input3", JSON.stringify(this.date3));
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      //console.log(this.roomList);
      //this.roomList = this.getroomList;
      //console.log(this.getroomList);
    },
  },
  maxValue(arr) {
    let max = arr[0];

    for (let val of arr) {
      if (val > max) {
        max = val;
      }
    }
    return max;
  },
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