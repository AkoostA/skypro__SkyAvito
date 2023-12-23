import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { safeString } from "../../helper/helper";
import { getToken, getUser } from "../../api/api";
import { tokenUpdate, userUpdate } from "../../store/reducers/reducers";
import S from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);

  const checkInput = () => {
    if (!login) throw new Error("Не введен логин");
    if (!password) throw new Error("Не введен пароль");
  };

  const loginButton = async () => {
    try {
      setDisabled(true);
      checkInput();
      const respToken = await getToken({
        login: safeString(login),
        password,
      });
      const respUser = await getUser({ token: respToken.access_token });
      dispatch(tokenUpdate(respToken));
      dispatch(userUpdate(respUser));
      localStorage.setItem("token", JSON.stringify(respToken));
      localStorage.setItem("user", JSON.stringify(respUser));
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const pressEnterKey = (event) => {
    if (event.keyCode === 13) loginButton();
  };

  useEffect(() => {
    setError(null);
  }, [login, password]);

  return (
    <div className={S.container__enter}>
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
          {errorLog && <span className={S.error}>{errorLog}</span>}
          <button
            className={S.btn__enter}
            onClick={loginButton}
            disabled={disabled}
            type="button"
          >
            {disabled ? "...Входим" : "Войти"}
          </button>
          <button
            className={S.btn__register}
            onClick={() => navigate("/register")}
            disabled={disabled}
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
