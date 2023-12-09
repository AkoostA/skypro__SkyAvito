import { Link } from "react-router-dom";
import S from "./Register.module.css";

function Register() {
  return (
    <div className={S.container__register}>
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
          <input
            className={S.modal__input}
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <input
            className={S.modal__input}
            type="text"
            name="first-name"
            placeholder="Имя (необязательно)"
          />
          <input
            className={S.modal__input}
            type="text"
            name="last-name"
            placeholder="Фамилия (необязательно)"
          />
          <input
            className={S.modal__input}
            type="text"
            name="city"
            placeholder="Город (необязательно)"
          />
          <button className={S.btn__register} type="button">
            Зарегистрироваться
          </button>
          <button className={S.btn__enter} type="button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
