import axios from "axios";

const token = window.localStorage.getItem("authorization")

const API = axios.create({
    baseURL: "http://localhost:2000/api/",
    headers: {
        "Content-Type": "application/json",
        "authorization": token
    }
})

export default API