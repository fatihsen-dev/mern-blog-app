import axios from "axios";

const HTTP = axios.create({
   baseURL: "http://localhost:5000",
});

export const blogs = async (formData) => await HTTP.post("/blogs", formData);
