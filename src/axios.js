import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-1107.herokuapp.com",
});

export default instance;
