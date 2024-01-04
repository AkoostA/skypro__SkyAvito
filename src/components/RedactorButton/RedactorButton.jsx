import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delPublish } from "../../api/api";
import { tokenUpdate } from "../../store/reducers/reducers";
import S from "./RedactorButton.module.css";

function RedactorButton({ id, token, setEditCheck }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const delProduct = async () => {
    const respDel = await delPublish({ id, token });
    dispatch(tokenUpdate(respDel.newToken));
    localStorage.setItem("token", JSON.stringify(respDel.newToken));
    navigate("/");
  };

  return (
    <form className={S.redactor__form} action="#">
      <button className={S.redactor__btn} onClick={() => setEditCheck(true)} type="button">
        Редактировать
      </button>
      <button className={S.redactor__btn} onClick={delProduct} type="button">
        Снять с публикации
      </button>
    </form>
  );
}

export default RedactorButton;
