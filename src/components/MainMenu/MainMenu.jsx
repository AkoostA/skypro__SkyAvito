import { Link } from "react-router-dom";
import S from "./MainMenu.module.css";

function MainMenu() {
  return (
    <div className={S.main__menu}>
    <Link className={S.menu__logo} to="/" />
    <form className={S.menu__form} action="#">
      <button className={S.menu__btn} type="button">
        Вернуться на&nbsp;главную
      </button>
    </form>
  </div>
  )
}

export default MainMenu;
