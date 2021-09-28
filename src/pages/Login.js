import React from "react";
import FormikLoginForm from "../components/Formik/LoginForm";
import { MyContext } from "../context/context"
import {useHistory} from "react-router-dom"

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: ''
  }

  const history = useHistory();

  const value  = React.useContext(MyContext);

  const onSubmit = values => {
    if (values.email === "admin@admin.com" && values.password === "admin") {
      value.user = true;
      console.log(value.user)
      history.push("/movies");
    }else{
      console.log("errado");
    }
  }

  return (
    <div>
      <FormikLoginForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  )
}

