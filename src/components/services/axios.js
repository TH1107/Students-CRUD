import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in',
   
  });


export default instance;

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response.status)
    return response.data ? response.data:{statusCode: response.status};
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });