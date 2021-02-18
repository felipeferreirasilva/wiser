import styles from "./Login.module.scss";
import LoginForm from "../../../components/forms/LoginForm";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.background} />
      <div className={styles.form}>
        <div className={styles.title}>Olá, seja bem-vindo!</div>
        <div className={styles.subtitle}>
          Para acessar a plataforma, faça seu login.
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
