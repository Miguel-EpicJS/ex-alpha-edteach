import { useHistory } from "react-router-dom";
import Layout from "./Layout";

import { UserContainer, UserInput, UserButton } from "../styles/user.pages.style"

export function User() {
  const history = useHistory()

  const loggout = () => {
    const user = JSON.parse(localStorage.getItem("login"));
    const log = { ...user, logged: false, disconnected_date: new Date().getMilliseconds() };

    localStorage.setItem("login", JSON.stringify(log));

    history.push("/");
  }

  return (
    <Layout>
      <UserContainer>
        <h1>USER</h1>
        <div>
          <div>
            Name: <UserInput value="Admin" />
          </div>
          <div>
            Email: <UserInput value="admin@admin.com" />
          </div>
          <div>
            Password: <UserInput value="admin" />
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