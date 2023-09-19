import React from 'react'
import { categorias } from '../../helpers/data'
import { axiosInstance } from '../../config/axiosInstance'


const FormCreacion = () => {
    // const handleSubmit = async () => {
    // }
  return (
    <div>
        <form>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Titulo</label>
                <input type="text" className="form-control" id="title" name="title" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Imagen del Curso</label>
                <input type="file" className="form-control" id="imagen" name="imagen" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Detalle del curso</label>
                <input type="text" className="form-control" id="detalle" name='detalle' />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">URL video</label>
                <input type="text" className="form-control" id="video" name="video" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Nombre Mentor</label>
                <input type="text" className="form-control" id="mentor" name="mentor" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">URL Foto mentor <span>(opcional)</span></label>
                <input type="text" className="form-control" id="img_mentor" name="img_mentor" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Categoria</label>
                <select name="categoria" className="form-control">
                    {categorias.map((categoria, index) => (
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