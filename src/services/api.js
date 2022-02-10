import axios from "axios";


const api = () => {
   return axios.create({
      baseURL: "https://api.npoint.io/7aa6d85ca17e05b57b23",
      withCredentials: false,
      headers: {
         "Content-Type": "application/json"
      }
   });
}

axios.interceptors.request.use((config) => {
      return Promise.resolve(config);
   }, (error) => {
      return Promise.reject(error);
   },
   null, {
      synchronous: true
   });


export default api