import React from "react";
import Home2 from "../assets/images/home2.png";
import '../css/home.css'
import { Link } from "react-router-dom";
Link

const Home = () => {
  return (
    <>
      <div className="container home-container">
        <div className="row">
          <div className="col-6">
            <h1>
              La plataforma <br /> de aprendizaje <br /> para desarroladores
            </h1>
            <Link to='/registro' className="btn btn-outline-info mt-3">
              {" "}
              Crea tu cuenta
            </Link>
            <p className="text-grey"> Unete a los más de 500.00 estudiantes</p>
          </div>
          <div className="col-6">
            <img src={Home2} alt="Home2" />
          </div>
        </div>
        <div className="row">
          <div className="col- offset-2 parrafito text-grey">
            <p>
              Aprende desarrollo web con HTML5, CSS y JavaScript. Backend con
              Python. React, Go, Laravel. Desarrollo móvil con Android, Flutter
              y mucho más. <b>Desde tu casa.</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
