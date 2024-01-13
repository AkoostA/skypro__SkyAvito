import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userSelector } from "../../store/selectors/selectors";
import { formatEmail, formatHttp } from "../../helper/helper";
import { addProductUpdate } from "../../store/reducers/reducers";
import S from "./MobileFooter.module.css";

function MobileFooter() {
  const user = useSelector(userSelector);
  const params = useParams();
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toProfile = () => {
    if (!user.id) navigate("/login");
    if (user.id)
      navigate(`/profile/${formatHttp(formatEmail(user.email))}_${user.id}`);
  };

  const newProduct = () => {
    if (!user.id) return navigate("/login");
    if (
      location === `/profile/${params.id}` ||
      location === `/product/${params.id}` ||
      location === `/profile-seller/${params.id}`
    ) {
      dispatch(addProductUpdate(true));
    } else {
      dispatch(addProductUpdate(true));
      navigate(`/profile/${formatHttp(formatEmail(user.email))}_${user.id}`);
    }
    return "";
  };

  return (
    <footer className={S.footer}>
      <button
        className={S.footer__btnHome}
        onClick={() => navigate("/")}
        type="button"
      >
        {null}
      </button>
      <button className={S.footer__btnAdd} onClick={newProduct} type="button">
        {null}
      </button>
      <button
        className={S.footer__btnProfile}
        onClick={toProfile}
        type="button"
      >
        {null}
      </button>
    </footer>
  );
}

export default MobileFooter;
