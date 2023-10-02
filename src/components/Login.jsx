import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { loginUser } from "../context/GlobalActions";



const Login = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm();
  const {state, dispatch} = useContext(GlobalContext);

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(loginUser(data, navigate))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="text-muted">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          name="username"
          {...register("username")}
          // value={formValues.correo}
          // onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Contraseña</label>
        <input
          type="password"
          className="form-control"
          name="password"
          {...register("password")}
          // value={formValues.password}
          // onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-info btn-block w-100 mt-3">
        Entrar
      </button>
    </form>
  );
};

export default Login;
