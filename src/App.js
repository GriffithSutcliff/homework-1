import React, { useState } from "react";
import UsersTable from "./components/UsersTable";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [users, setUsers] = useState([]);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function createUser(e) {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("БУ! испугался? не бойся, ты просто неправильно ввёл почту");
      return;
    }

    setEmailError("");
    setUsers([...users, { name, email }]);
  }

  return (
    <div className="App">
      <button onClick={toggleVisibility}>
        Регистрация пользователей
      </button>
      <div className={`form ${isVisible ? "visible" : ""}`}>
        <form onSubmit={createUser}>
          <input
            className="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Имя"
          />
          <input
            className="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <div style={{ color: "red" }}>{emailError}</div>
          <button type="submit">Добавить пользователя</button>
        </form>
      </div>
      <UsersTable users={users}/>
    </div>
  );
}

export default App;