import { axiosInstance } from "../config/axiosInstance";
import { GET_CURSOS } from "./types";

export const getCursos = async () => {
    try {
        const response = await axiosInstance.get("/cursos");
        return {
            type: GET_CURSOS,
            payload: response.data.cursos
        }

    } catch (error) {
        console.log(error);
    }
}

export const createCourse = async (formDatos, imgFile, dispatch ) => {
    try {
        const formData = new FormData();
        formData.append("title", formDatos.title);
        formData.append("imagen", imgFile[0])
        formData.append("detalle", formDatos.detalle);
        formData.append("video", formDatos.video);
        formData.append("mentor", formDatos.mentor);
        formData.append("img_mentor", formDatos.img_mentor);
        formData.append("categoria", formDatos.categoria);
       const resp = await axiosInstance.post("/curso", formData, {
        headers: {
            'Content-Type': "multipart/form-data",
            
        }
       })
       console.log(resp.data);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(getCursos())
      }
}

export const loginUser = async (data, navigate) => {
    try {
        const response = await axiosInstance.post("/user/login", data)
        localStorage.setItem("token", response.data.token);
        navigate("/admin")
      } catch (error) {
        console.log(error);
      }
}

