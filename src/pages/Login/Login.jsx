import { Link, useNavigate } from "react-router-dom";
import S from "./Login.module.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={S.container__enter}>
      <div className={S.modal__block}>
        <form className={S.modal__form} action="#">
          <Link to="/" className={S.modal__logo} />
          <input
            className={S.modal__input}
            type="text"
            name="login"
            placeholder="login"
          />
          <input
            className={S.modal__input}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <button className={S.btn__enter} type="button">
            Войти
          </button>
          <button
            className={S.btn__register}
            onClick={() => navigate("/register")}
            type="button"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
