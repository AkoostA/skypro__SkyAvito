import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Products from "../../components/Products/Products";
import S from "./Main.module.css";

function Main() {
  return (
    <div className={S.container}>
      <Header />
      <main className={S.main}>
        <Search />
        <div className={S.main__container}>
          <h2 className={S.main__title}>Объявления</h2>
          <Products />
        </div>
      </main>
    </div>
  );
}

export default Main;
