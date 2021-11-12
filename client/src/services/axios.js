import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
axios.defaults.headers.common['Authorization'];