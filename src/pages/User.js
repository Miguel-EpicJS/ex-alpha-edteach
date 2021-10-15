import { useHistory } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";

import { UserContainer, UserInput, UserButton, UserEyeicon, MarginName, MarginEmail } from "../styles/user.pages.style";

import {AiFillEye} from "react-icons/ai";

const eye = <AiFillEye />;

export function User() {
  const history = useHistory();
  const admin = JSON.parse(localStorage.getItem("users"))[0];
  const [passwordShown, setPasswordShown] = useState(false);

 
  const loggout = () => {
    const user = JSON.parse(localStorage.getItem("login"));
    const log = { ...user, logged: false, user: null };

    localStorage.setItem("login", JSON.stringify(log));

    history.push("/");
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  
  return (
    <Layout>
      <UserContainer>
        <h1>USER</h1>
        <div>
          <div>
            Name: <MarginName></MarginName> <UserInput disabled  value={admin.name} />
          </div>
          <div>
            Email: <MarginEmail></MarginEmail> <UserInput disabled  value={admin.login} />
          </div>
          <div>
            Password: <UserInput disabled  value={admin.password} type={passwordShown ? "text" : "password"} />  <UserEyeicon onClick={togglePasswordVisiblity}>{eye}</UserEyeicon>
          </div>
        </div>

        <div>
          <UserButton onClick={() => { loggout() }}>LOGGOUT</UserButton>
        </div>
      </UserContainer>
    </Layout>
  );
}