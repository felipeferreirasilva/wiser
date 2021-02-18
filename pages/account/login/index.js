import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import Button from "../../../components/Button";
import LoginForm from "../../../components/forms/LoginForm";
import { useSelector } from "react-redux";

const Login = () => {
  const isLogged = useSelector((state) => state.auth["isLogged"]);
  const user = useSelector((state) => state.auth["user"]);

  return (
    <div className={styles.login}>
      <div className={styles.background} />
      <div className={styles.form}>
        
        {!isLogged && (
          <>
            <div className={styles.title}>Olá, seja bem-vindo!</div>
            <div className={styles.subtitle}>
              Para acessar a plataforma, faça seu login.
            </div>
            <LoginForm />
          </>
        )}

        {isLogged && (
          <>
            <div className={styles.title}>Olá, {user.firstName}!</div>
            <div className={styles.subtitle}>
              Para desconectar clique no botão abaixo.
            </div>
            <Button primary type="submit" value="Submit" label="Sair" />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
