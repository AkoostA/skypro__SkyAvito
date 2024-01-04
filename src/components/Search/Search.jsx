import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchUpdate } from "../../store/reducers/reducers";
import S from "./Search.module.css";

function Search() {
  const dispatch = useDispatch();

  return (
    <div className={S.main__search}>
      <Link className={S.main__logo} to="/" />
      <form className={S.search__form}>
        <input
          className={S.search__text}
          onChange={(event) => dispatch(searchUpdate(event.target.value))}
          type="search"
          name="search"
          placeholder="Поиск по объявлениям"
        />
      </form>
    </div>
  );
}

export default Search;
