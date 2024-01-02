import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatEmail, formatHttp } from "../../helper/helper";
import { userSelector } from "../../store/selectors/selectors";
import S from "./Header.module.css";

function Header({ setNewProductCheck }) {
  const location = useLocation().pathname;
  const user = useSelector(userSelector);
  const params = useParams();
  const navigate = useNavigate();

  const toProfile = () => {
    if (!user.id) navigate("/login");
    if (user.id)
      navigate(`/profile/${formatHttp(formatEmail(user.email))}_${user.id}`);
  };

  return (
    <header className={S.header}>
      <nav className={S.header__nav}>
        {location === "/" && (
          <button className={S.header__btn} onClick={toProfile} type="button">
            Вход в личный кабинет
          </button>
        )}
        {location === `/product/${params.id}` && (
          <>
            <button
              className={S.btn__put}
              onClick={() => setNewProductCheck(true)}
              type="button"
            >
              Разместить объявление
            </button>
            <button
              className={S.btn__personal}
              onClick={toProfile}
              type="button"
            >
              Личный кабинет
            </button>
          </>
        )}
        {location === `/profile-seller/${params.id}` && (
          <>
            <button
              className={S.btn__put}
              onClick={() => setNewProductCheck(true)}
              type="button"
            >
              Разместить объявление
            </button>
            <button
              className={S.btn__personal}
              onClick={toProfile}
              type="button"
            >
              Личный кабинет
            </button>
          </>
        )}
        {location === `/profile/${params.id}` && (
          <button
            className={S.btn__put}
            onClick={() => setNewProductCheck(true)}
            type="button"
          >
            Разместить объявление
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
