import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addRegister } from "../../api/api";
import { safeString } from "../../helper/helper";
import { userUpdate } from "../../store/reducers/reducers";
import S from "./Register.module.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);

  const checkInput = () => {
    if (!login) throw new Error("Не введен логин");
    if (login.length < 5)
      throw new Error("Логин должен быть минимум из 5 символов");
    if (!password) throw new Error("Не введен пароль");
    if (password.length < 5)
      throw new Error("Пароль должен быть минимум из 5 символов");
    if (!repeatPassword) throw new Error("Не введен повторный пароль");
    if (password !== repeatPassword) throw new Error("Пароль не совпадает");
  };

  const registerButton = async () => {
    try {
      setDisabled(true);
      checkInput();
      const resp = await addRegister({
        login: safeString(login),
        password,
        name: safeString(name),
        surname: safeString(surname),
        city: safeString(city),
      });
      dispatch(userUpdate(resp));
      localStorage.setItem("user", JSON.stringify(resp));
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const pressEnterKey = (event) => {
    if (event.keyCode === 13) registerButton();
  };

  useEffect(() => {
    setError(null);
  }, [login, password, repeatPassword]);

  return (
    <div className={S.container__register}>
      <div className={S.modal__block}>
        <form className={S.modal__form} action="#">
          <Link to="/" className={S.modal__logo} />
          <input
            className={S.modal__input}
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
            type="text"
            name="login"
            placeholder="login"
          />
          <input
            className={S.modal__input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <input
            className={S.modal__input}
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <input
            className={S.modal__input}
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
            type="text"
            name="first-name"
            placeholder="Имя (необязательно)"
          />
          <input
            className={S.modal__input}
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
            type="text"
            name="last-name"
            placeholder="Фамилия (необязательно)"
          />
          <input
            className={S.modal__input}
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
            type="text"
            name="city"
            placeholder="Город (необязательно)"
          />
          {errorLog && <span className={S.error}>{errorLog}</span>}
          <button
            className={S.btn__register}
            onClick={registerButton}
            disabled={disabled}
            type="button"
          >
            Зарегистрироваться
          </button>
          <button
            className={S.btn__enter}
            onClick={() => navigate("/login")}
            type="button"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
