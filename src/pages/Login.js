import React, { useState, useEffect } from "react";
import FormikLoginForm from "../components/Formik/LoginForm";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: ""
  }
  const history = useHistory();
  const [isWrong, setIsWrong] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadLoginInformation = () => {
      if (localStorage.getItem("users") === null) {
        const users = [{name: "Admin", login: "admin@admin.com", password: "admin"}];
        localStorage.setItem("users", JSON.stringify(users));
      };
    };

    loadLoginInformation();

    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  useEffect(() => {
    history.push("/");
  }, [history])

  const onSubmit = values => {
    if(localStorage.getItem("login") === null){
      const log = { logged: false, created_date: new Date().getMilliseconds(), logged_date: null, disconnected_date: null, attempted: [new Date().getMilliseconds()]};
      localStorage.setItem("login", JSON.stringify(log));
    }

    users.forEach((user) => {
      if (values.email === user.login && values.password === user.password) {
        const user = JSON.parse(localStorage.getItem("login"));
        const log = {logged: true, user: user.name};
  
        localStorage.setItem("login", JSON.stringify(log));
        setIsWrong(false);
      
        history.push("/movies");
      }else{
        const user = JSON.parse(localStorage.getItem("login"));
        user.attempted.push(new Date().getMilliseconds());
        setIsWrong(true);
        setTimeout(() => {setIsWrong(false);}, 1001);
        history.push("/");
      };
    });
  }

  return (
    <div>
      <FormikLoginForm isWrong={isWrong} initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  )
}

