import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { productSelector } from "../../store/selectors/selectors";
import { normalizeDate, sellsFromData } from "../../helper/helper";
import Header from "../../components/Header/Header";
import MainMenu from "../../components/MainMenu/MainMenu";
import S from "./Product.module.css";

function Product() {
  const product = useSelector(productSelector);

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
                <h3 className={S.article__title}>{product.title}</h3>
                <div className={S.article__info}>
                  <p className={S.article__date}>
                    {normalizeDate(product.created_on)}
                  </p>
                  <p className={S.article__city}>{product.user?.city}</p>
                  <Link className={S.article__link} to="/product">
                    23 отзыва
                  </Link>
                </div>
                <p className={S.article__price}>{product.price} ₽</p>
                <button className={S.article__btn} type="button">
                  Показать телефон
                  <span>{product.user.phone}</span>
                </button>
                <div className={S.article__author}>
                  <div className={S.author__img} />
                  <div className={S.author__cont}>
                    <button className={S.author__btn} type="button">
                      {product.user.name}
                    </button>
                    <p className={S.author__about}>
                      Продает товары с {sellsFromData(product.user.sells_from)}
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
            <p className={S.main__text}>{product.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
