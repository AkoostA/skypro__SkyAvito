import { Link, useNavigate } from "react-router-dom";
import S from "./MainMenu.module.css";

function MainMenu() {
  const navigate = useNavigate();

  const toMain = () => {
    navigate("/");
  };

  return (
    <div className={S.main__menu}>
      <Link className={S.menu__logo} to="/" />
      <form className={S.menu__form} action="#">
        <button className={S.menu__btn} onClick={toMain} type="button">
          Вернуться на главную
        </button>
      </form>
    </div>
  );
}

export default MainMenu;
