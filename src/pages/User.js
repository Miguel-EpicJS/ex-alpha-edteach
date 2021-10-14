import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Layout";

import { UserContainer, UserInput, UserButton } from "../styles/user.pages.style";


const getAdminInformation = () => {
  if(localStorage.getItem("admin") === null)
  {
    localStorage.setItem("admin", JSON.stringify({name: "Admin", email: "admin@admin.com", password: "admin"}));
  };

};


export function User() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    getAdminInformation();
    
    setUsers(JSON.parse(localStorage.getItem("users")));
    users.forEach((user) => {
      const us = JSON.parse(localStorage.getItem("login"));
      if (us.user === user.name) {
        setAdmin(user);
      };
    });
  }, [users]);

  const loggout = () => {
    const user = JSON.parse(localStorage.getItem("login"));
    const log = { ...user, logged: false, user: null };

    localStorage.setItem("login", JSON.stringify(log));

    history.push("/");
  }
  
  return (
    <Layout>
      <UserContainer>
        <h1>USER</h1>
        <div>
          <div>
            Name: <UserInput disabled  value={admin.name || ""} />
          </div>
          <div>
            Email: <UserInput disabled  value={admin.login || ""} />
          </div>
          <div>
            Password: <UserInput disabled  value={admin.password || ""} type="password" />
          </div>
        </div>

        <div>
          <UserButton>SAVE</UserButton>
          <UserButton onClick={() => { loggout() }}>LOGGOUT</UserButton>
        </div>
      </UserContainer>
    </Layout>
  );
}