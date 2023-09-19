import * as yup from "yup";

export const REGISTRO_SCHEMA = yup.object({
    username: yup.string().required("El email es requerido"),
    name: yup.string().max(25, "El maximo son 25 carateres").min(5, "El minimo son 5 caracteres").required("El nombre completo es requerido"),
    password: yup.string().min(6, "Minimo 6 caracteres").max(20, "Maximo de 20 caracteres").required("La contrasenia es obligatoria"),
    re_password: yup.string().oneOf([yup.ref("password")], "las contrasenias no coinciden").required("Campo obligatorio")
});

export const LOGIN_SCHEMA = yup.object({
    username: yup.string().required("El email es requerido"),
    password: yup.string().min(6, "Minimo 6 caracteres").max(20, "Maximo de 20 caracteres").required("La contrasenia es obligatoria"),
});