import axios from "axios";

const token = window.localStorage.getItem("authorization")

const API = axios.create({
    baseURL: "http://149.28.157.18:2000/api/",
    headers: {
        "Content-Type": "application/json",
        "authorization": token
    }
})

export default API