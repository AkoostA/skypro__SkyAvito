import { useLocation } from "react-router-dom";
import S from "./Header.module.css";

function Header() {
  const location = useLocation().pathname;

  return (
    <header className={S.header}>
      <nav className={S.header__nav}>
        {location === "/" ? (
          <button className={S.header__btn} type="button">
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
