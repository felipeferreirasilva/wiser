import React, { useState } from "react";
import styles from "./Login.module.scss";
import Input from "../Input";
import Button from "../Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("teste", username, password);
  };

  return (
    <>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <Input
          id="email"
          type="email"
          label="E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          id="password"
          type="password"
          label="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button primary type="submit" value="Submit" label="Enviar" />
      </form>
      <div className={styles.loginFooter}>
        <span>
          Esqueceu seu login ou senha? Clique <a href="#">aqui</a>
        </span>
      </div>
    </>
  );
};

export default LoginForm;
