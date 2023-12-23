import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { tokenUpdate, userUpdate } from "../../store/reducers/reducers";
import S from "./MainMenu.module.css";

function MainMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const exit = () => {
    dispatch(userUpdate(null));
    dispatch(tokenUpdate(null));
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={S.main__menu}>
      <Link className={S.menu__logo} to="/" />
      <form className={S.menu__form} action="#">
        <button
          className={S.menu__btn}
          onClick={() => navigate("/")}
          type="button"
        >
          Вернуться на главную
        </button>
        {location === "/profile" && (
          <button className={S.exit__btn} onClick={exit} type="button">
            Выход
          </button>
        )}
      </form>
    </div>
  );
}

export default MainMenu;
