import React, { useState } from "react";
import FormikLoginForm from "../components/Formik/LoginForm";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: ''
  }
  const history = useHistory();
  const [isWrong, setIsWrong] = useState(false);


  const onSubmit = values => {
    if(localStorage.getItem("login") === null){
      const log = { logged: false, created_date: new Date().getMilliseconds(), logged_date: null, disconnected_date: null, attempted: [new Date().getMilliseconds()]};
      localStorage.setItem("login", JSON.stringify(log));
    }

    if (values.email === "admin@admin.com" && values.password === "admin") {
      const user = JSON.parse(localStorage.getItem("login"));
      const log = {...user, logged: true, logged_date: new Date().getMilliseconds(), disconnected_date: null};

      localStorage.setItem("login", JSON.stringify(log));
      setIsWrong(false);
    
      history.push("/movies");
    }else{
      const user = JSON.parse(localStorage.getItem("login"));
      user.attempted.push(new Date().getMilliseconds());
      setIsWrong(true);
      setTimeout(() => {setIsWrong(false);}, 1001);
    }

    console.log(JSON.parse(localStorage.getItem("login")));
  }

  return (
    <div>
      <FormikLoginForm isWrong={isWrong} initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  )
}

