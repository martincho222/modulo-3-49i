import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/api/v1`
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization= `Bearer ${token}`
    }
    return config
})