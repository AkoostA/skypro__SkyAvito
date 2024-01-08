import { useLocation, useParams } from "react-router-dom";
import S from "./BtnPrev.module.css";

function BtnPrev() {
  const location = useLocation().pathname;
  const params = useParams();

  return (
    <>
      {location === `/product/${params.id}` && (
        <button className={S.prev} type="button">
          {null}
        </button>
      )}
      {location === `/product/${params.id}` && (
        <button className={S.prev} type="button">
          {null}
        </button>
      )}
    </>
  );
}

export default BtnPrev;
