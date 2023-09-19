import React from "react";
import "../css/registro.css"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { REGISTRO_SCHEMA } from "../helpers/validationsSchemas";

const Registro = () => {
  const {register, handleSubmit, formState: { errors }, reset} = useForm({
    resolver: yupResolver(REGISTRO_SCHEMA)
  })

  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
  console.log(errors);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-2">
        <label className="text-muted">Correo electrónico</label>
        <input
          type="text"
          className="form-control"
          name="username"
          {...register("username")}
          // value={formValues.usuario}
          // onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label className="text-muted">Nombre Completo</label>
        <input
          type="text"
          className="form-control"
          name="name"
          {...register("name")}
          // value={formValues.usuario}
          // onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label className="text-muted">Contraseña</label>
        <input
          name="password"
          type="password"
          className="form-control"
          {...register("password")}
          // value={formValues.password}
          // onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Repetir contraseña</label>
        <input type="password" className="form-control" name="re_password" {...register("re_password")} />
      </div>

      <button type="submit" className="btn btn-info btn-block w-100 mt-3">
        Registrarse
      </button>
    </form>
    </>
  );
};

export default Registro;
