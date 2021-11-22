import axios from "axios";

const baseURL = "http://localhost:3000/";

const getHeaders = {
  headers: {
    accesstoken: localStorage.getItem("accesstoken"),
  },
};

export {axios, baseURL, getHeaders}