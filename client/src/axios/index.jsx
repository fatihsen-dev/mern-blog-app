import axios from "axios";

const HTTP = axios.create({
   baseURL: "http://localhost:5000",
});

export const blogs = async (data) => await HTTP.post("/blogs", data);

export const register = async (data) => await HTTP.post("/users/register", data);
export const login = async (data) => await HTTP.post("/users/login", data);
export const userControl = async (data) => await HTTP.post("/users/userControl", data);
