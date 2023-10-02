import React, { useContext, useEffect, useState } from 'react'
import { categorias } from '../../helpers/data'
import { axiosInstance } from '../../config/axiosInstance'
import { GlobalContext } from '../../context/GlobalContext'
import { createCourse, getCursos } from '../../context/GlobalActions'



const FormCreacion = () => {
    const [categories, setCategories] = useState([])
    const [imgFile, setImgFile] = useState([])
    const [formDatos, setFormDatos] = useState({
        title: "",
        detalle: "",
        video: "",
        mentor: "",
        categoria: ""
    })
    const { state, dispatch } = useContext(GlobalContext)

    const getCategorias = async () => {
        const resp = await axiosInstance.get("/categorias")
        setCategories(resp.data.categorias);
    }

    useEffect(() => {
        getCategorias()
    }, [])
    const handleChangeDatos = (e) => {
        setFormDatos({
            ...formDatos,
            [e.target.name]: e.target.value
        })
    }
    const handleImage = (e) => {
        setImgFile([...e.target.files])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCourse(formDatos, imgFile, dispatch))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Titulo</label>
                <input type="text" className="form-control" id="title" name="title" onChange={handleChangeDatos} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Imagen del Curso</label>
                <input type="file" className="form-control" id="imagen" name="imagen" onChange={handleImage} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Detalle del curso</label>
                <input type="text" className="form-control" id="detalle" name='detalle' onChange={handleChangeDatos} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">URL video</label>
                <input type="text" className="form-control" id="video" name="video" onChange={handleChangeDatos} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Nombre Mentor</label>
                <input type="text" className="form-control" id="mentor" name="mentor" onChange={handleChangeDatos} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">URL Foto mentor <span>(opcional)</span></label>
                <input type="text" className="form-control" id="img_mentor" name="img_mentor" onChange={handleChangeDatos} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Categoria</label>
                <select name="categoria" className="form-control" onChange={handleChangeDatos}>
                    {categories.map((categoria, index) => (
                        <option key={categoria._id} value={categoria._id}>{categoria.name}</option>
                    ))}
                </select>
            </div>
            {/* create button to send form */}
            <div className='form-group'>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormCreacion