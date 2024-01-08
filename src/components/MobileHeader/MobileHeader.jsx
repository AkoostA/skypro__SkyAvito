import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchUpdate } from "../../store/reducers/reducers";
import S from "./MobileHeader.module.css";

function MobileHeader() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  return (
    <div className={S.mobileHeader}>
      <div className={S.mobileLogoBlock}>
        <Link className={S.mobileLogo} to="/" />
      </div>
      {location === "/" && (
        <input
          className={S.search__text}
          onChange={(event) => dispatch(searchUpdate(event.target.value))}
          type="search"
          name="search"
          placeholder="Поиск"
        />
      )}
    </div>
  );
}

export default MobileHeader;
