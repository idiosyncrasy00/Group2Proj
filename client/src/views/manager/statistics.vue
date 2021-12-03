<template>
<!--
<div style="max-width: 600px">
    <vue3-chart-js v-bind="{ ...barChart }" />
  </div>
  -->
    <div>
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
    />
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
          >Tuần</a
        >
        <a
          v-on:click="activetab = 3"
          v-bind:class="[activetab === 3 ? 'active' : '']"
          >Tháng</a
        >
      </div>
      <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
          <div class="container h-100"> 
            <div style="max-width: 600px">
            <vue3-chart-js v-bind="{ ...barChart }" />
          </div>
        </div>
        </div>
        <div v-if="activetab === 2" class="tabcontent">
          <div class="container h-100"> 
            <div style="max-width: 600px">
            <vue3-chart-js v-bind="{ ...barChart }" />
          </div>
        </div>          
        </div>
        <div v-if="activetab === 3" class="tabcontent">
          <div class="container h-100"> 
            <div style="max-width: 600px">
            <vue3-chart-js v-bind="{ ...barChart }" />
          </div>
        </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "../../../node_modules/@j-t-mcc/vue3-chartjs"
export default {
name:"statistics",
components: {
    Vue3ChartJs,
  },
  data(){
    return{
      activetab:1
    }
  },
  setup() {
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
             display: true,
             text: 'Bảng thống kê số lượt đặt phòng',
          }
        },
        scales: {
          y: {
            min: 0,
            max: 10,
            ticks: {
              callback: function (value) {
                return `${value}`;
              },
            },
          },
        },
      },
      data: {
        labels: ["Phòng 1", "Phòng 2", "Phòng 3", "Phòng 4"],
        datasets: [
          {
            label: "Số lượt đặt phòng",
            backgroundColor: "gray",
            data: [3, 2, 5, 1],
          },
        ],
      },
    };

    return {
      barChart,
    };
  },
}
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
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

.card {
  background-color: var(--bg-color);
}
body {
  background: #edf1f5;
  margin-top: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;
  border-radius: 0;
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