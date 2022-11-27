import * as Yup from "yup"

export function initialValues(){
  return {
    email: "",
    password: "",
    repeatPassword: ""

  }
}

export function validationSchema () {
  return Yup.object({
    email: Yup.string().email("El correo electrónico no es valido").required("Correo electrónico es obligatoria"),
    password: Yup.string().required("La contraseña es obligatoria"),
    repeatPassword: Yup.string().required("La contraseña es obligatorio").oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  })
}