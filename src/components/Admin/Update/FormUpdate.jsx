import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../config/axiosInstance";

const FormUpdate = ({datoCurso, getCourses}) => {
  const [categories, setCategories] = useState([]);
  const [categoriaCurso, setCategoriaCurso] = useState("")
  const { title, detalle, video, mentor, img_mentor, categoria } = datoCurso
  const [formDatos, setFormDatos] = useState({
    title,
    detalle,
    video,
    mentor,
    categoria
})

const handleChangeDatos = (e) => {
  setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value
  })
}

  const getCategorias = async () => {
    const resp = await axiosInstance.get("/categorias");
    setCategories(resp.data.categorias);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      await axiosInstance.put(`/curso/${datoCurso._id}`, formDatos)
    } catch (error) {
      console.log(error);
    } finally{
      getCourses()
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Titulo</label>
          <input type="text" className="form-control" id="title" name="title" value={formDatos.title} onChange={handleChangeDatos} />
        </div>
        {/* <div className="form-group mb-3">
          <label htmlFor="nombre">Imagen del Curso</label>
          <input
            type="file"
            className="form-control"
            id="imagen"
            name="imagen"
          />
        </div> */}
        <div className="form-group mb-3">
          <label htmlFor="nombre">Detalle del curso</label>
          <input
            type="text"
            className="form-control"
            id="detalle"
            name="detalle"
            value={formDatos.detalle}
            onChange={handleChangeDatos}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nombre">URL video</label>
          <input type="text" className="form-control" id="video" name="video" value={formDatos.video} onChange={handleChangeDatos} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Nombre Mentor</label>
          <input
            type="text"
            className="form-control"
            id="mentor"
            name="mentor"
            value={formDatos.mentor}
            onChange={handleChangeDatos}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nombre">
            URL Foto mentor <span>(opcional)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="img_mentor"
            name="img_mentor"
            value={formDatos.img_mentor}
            onChange={handleChangeDatos}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Categoria</label>
          <select name="categoria" className="form-control" value={formDatos.categoria._id}  onChange={(e)=> setCategoriaCurso(e.target.value)}>
            {categories.map((categorie, index) => (
              <option key={categorie._id}  value={categorie._id} >
                {categorie.name}
              </option>
            ))}
          </select>
        </div>
        {/* create button to send form */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Modificar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUpdate;
