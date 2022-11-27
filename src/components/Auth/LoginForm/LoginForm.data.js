import * as Yup from "yup";

export function initialValues(){
  return {
    email: "",
    password: "",
  };
}

export function validationSchema () {
  return Yup.object({
    email: Yup.string().email("El correo electrónico no es valido").required("Correo electrónico es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  })
}