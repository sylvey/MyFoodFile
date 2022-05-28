import axios from "axios";


const instance =  axios.create({
    baseURL: `http://ec2-3-145-186-98.us-east-2.compute.amazonaws.com:8000`,
    withCredentials: true,
});

instance.interceptors.response.use(
    (response)=> response,
    (error)=>Promise.reject(error.response)
);

export default instance;