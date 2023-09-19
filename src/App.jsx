import React from 'react'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import LoginPage from './pages/LoginPage'
import RegistroView from './pages/RegistroView'
import { Routes, Route } from 'react-router-dom'
import Cursos from './pages/Cursos'
import Curso from './pages/Curso'
import Admin from './pages/Admin'
import PrivateRoutes from './Routes/PrivateRoutes'



function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/registro' element={<RegistroView />} />
      <Route path='*' element={<h1>Not Found</h1>} />
      <Route element={<PrivateRoutes />}>
        <Route path='/admin' element={<Admin />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/curso/:id' element={<Curso />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
