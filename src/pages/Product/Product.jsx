import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainMenu from "../../components/MainMenu/MainMenu";
import S from "./Product.module.css";

function Product() {
  return (
    <div className={S.container}>
      <Header />
      <main className={S.main}>
        <div className={S.main__container}>
          <MainMenu />
        </div>
        <div className={S.main__article}>
          <div className={S.article__content}>
            <div className={S.article__left}>
              <div className={S.article__imgBox}>
                <div className={S.article__imgMain} />
                <div className={S.article__imgBar}>
                  <div className={S.article__imgSide} />
                  <div className={S.article__imgSide} />
                  <div className={S.article__imgSide} />
                  <div className={S.article__imgSide} />
                  <div className={S.article__imgSide} />
                  <div className={S.article__imgSide} />
                </div>
              </div>
            </div>
            <div className={S.article__right}>
              <div className={S.article__block}>
                <h3 className={S.article__title}>
                  Ракетка для большого тенниса Triumph Pro STС Б/У
                </h3>
                <div className={S.article__info}>
                  <p className={S.article__date}>Сегодня в 10:45</p>
                  <p className={S.article__city}>Санкт-Петербург</p>
                  <Link className={S.article__link} to="/product">
                    23 отзыва
                  </Link>
                </div>
                <p className={S.article__price}>2 200 ₽</p>
                <button className={S.article__btn} type="button">
                  Показать&nbsp;телефон
                  <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                </button>
                <div className={S.article__author}>
                  <div className={S.author__img} />
                  <div className={S.author__cont}>
                    <Link className={S.author__name} to="/product">Кирилл</Link>
                    <p className={S.author__about}>
                      Продает товары с августа 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={S.main__container}>
          <h3 className={S.main__title}>Описание товара</h3>
          <div className={S.main__content}>
            <p className={S.main__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
