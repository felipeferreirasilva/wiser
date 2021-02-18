import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import Input from "../Input";
import Button from "../Button";
import { login } from "../../redux/modules/auth";
import { useDispatch } from "react-redux";
import { isValidEmail, isValidPassword } from "../../shared/utils/validators";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();
    setErrors({});

    if (!isValidEmail(username)) {
      setErrors({ email: "Digite um e-mail válido." });
      return false;
    }

    if (!isValidPassword(password)) {
      setErrors({ password: "Digite uma senha válida." });
      return false;
    }

    dispatch(login({ username, password }));
  };

  return (
    <>
      <form onSubmit={(e) => onSubmitForm(e)} noValidate>
        <Input
          id="email"
          type="email"
          label="E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={errors.email}
          required
        />
        <Input
          id="password"
          type="password"
          label="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          required
        />
        <Button primary type="submit" value="Submit" label="Entrar" />
      </form>
      <footer className={styles.loginFooter}>
        <span>
          Esqueceu seu login ou senha? Clique <a href="#">aqui</a>
        </span>
      </footer>
    </>
  );
};

export default LoginForm;
