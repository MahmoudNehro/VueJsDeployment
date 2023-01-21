import axios from "axios";

export default axios.create({
  baseURL: "https://scandi-web-task.000webhostapp.com",
  headers: {
    "Content-type": "application/json",
  }
});
