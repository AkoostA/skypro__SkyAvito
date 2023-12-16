import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { productSelector } from "../../store/selectors/selectors";
import { normalizeDate, sellsFromData } from "../../helper/helper";
import Header from "../../components/Header/Header";
import MainMenu from "../../components/MainMenu/MainMenu";
import S from "./Product.module.css";
import PhoneButton from "../../components/PhoneButton/PhoneButton";

function Product() {
  let product = useSelector(productSelector);
  const navigate = useNavigate();

  if (!product) product = JSON.parse(localStorage.getItem("product"));

  const toProfile = () => {
    navigate("/profile-seller");
  };

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
                {product.images[0] ? (
                  <img
                    className={S.article__imgMain}
                    src={`http://127.0.0.1:8090/${product.images[0].url}`}
                    alt={product.title}
                  />
                ) : (
                  <div className={S.article__imgMain} />
                )}
                <div className={S.article__imgBar}>
                  {product.images?.map((img) => (
                    <img
                      className={S.article__imgSide}
                      src={`http://127.0.0.1:8090/${img.url}`}
                      alt={product.title}
                    />
                  ))}
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
                <PhoneButton phone={product.user.phone}/>
                <div className={S.article__author}>
                  <div className={S.author__img} />
                  <div className={S.author__cont}>
                    <button
                      className={S.author__btn}
                      onClick={toProfile}
                      type="button"
                    >
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
