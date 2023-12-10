import { Link } from "react-router-dom";
import S from "./Search.module.css";

function Search() {
  return (
    <div className={S.main__search}>
      <Link className={S.main__logo} to="/" />
      <form className={S.search__form}>
        <input
          className={S.search__text}
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
        <button className={S.search__btn} type="button">
          Найти
        </button>
      </form>
    </div>
  );
}

export default Search;
