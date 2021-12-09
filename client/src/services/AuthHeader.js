import axios from "axios";

const baseURL = process.env.VUE_APP_API_ENDPOINT;

const getHeaders = {
  headers: {
    accesstoken: localStorage.getItem("accesstoken"),
  },
};

export {axios, baseURL, getHeaders}