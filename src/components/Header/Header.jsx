import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userSelector } from "../../store/selectors/selectors";
import S from "./Header.module.css";

function Header() {
  const location = useLocation().pathname;
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  const toProfile = () => {
    if (!user) navigate("/login");
    if (user) navigate("/profile");
  };

  return (
    <header className={S.header}>
      <nav className={S.header__nav}>
        {location === "/" ? (
          <button className={S.header__btn} onClick={toProfile} type="button">
            Вход в личный кабинет
          </button>
        ) : (
          <>
            <button className={S.btn__put} type="button">
              Разместить объявление
            </button>
            <button className={S.btn__personal} type="button">
              Личный кабинет
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
