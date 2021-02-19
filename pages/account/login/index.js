import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import Button from "../../../components/Button";
import Toast from "../../../components/Toast";
import LoginForm from "../../../components/forms/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/ducks/auth";

const Login = () => {
  const isLogged = useSelector((state) => state.auth["isLogged"]);
  const user = useSelector((state) => state.auth["user"]);
  const error = useSelector((state) => state.auth["error"]);
  const dispatch = useDispatch();

  return (
    <div className={styles.login}>
      {error && <Toast message={error} />}

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
            <Button primary label="Sair" onClick={() => dispatch(logout())} />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
