import axios from "axios";


export const appAxios = axios.create({
   baseURL: process.env.APP_BASE_URL || "https://api.atexlimited.com", 
 });