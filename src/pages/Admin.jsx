import React, { useEffect, useState, useContext } from 'react'
import CursosTable from '../components/Admin/CursosTable'
import ModalCreacion from '../components/Admin/ModalCreacion'
import { axiosInstance } from '../config/axiosInstance';
import { GlobalContext } from '../context/GlobalContext';
import { getCursos } from '../context/GlobalActions';

const Admin = () => {
    const [show, setShow] = useState(false);
    const [allCursos, setAllCursos] = useState([])
    const { state, dispatch } = useContext(GlobalContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // getCourses()
        dispatch(getCursos())
    }, [])
    
  return (
    <div className="container">
    <div className="row">
        <div className="col">
            <h2>Admin</h2>
            <button className='btn btn-outline-primary' onClick={handleShow}>Agregar Curso</button>
            <hr />
        </div>
    </div>
    <div className="row">
        <div className="col">
            <h3>Administrador de cursos</h3>
            <hr />
        </div>
    </div>
    <div className="row">
        <CursosTable allCursos={state.cursos} getCourses={getCursos} dispatch={dispatch} />
    </div>
    <ModalCreacion show={show} handleClose={handleClose} />

</div>
  )
}

export default Admin