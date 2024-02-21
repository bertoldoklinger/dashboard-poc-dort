import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-pdt.vercel.app/api",
  paramsSerializer: {
    indexes: null
}
})
