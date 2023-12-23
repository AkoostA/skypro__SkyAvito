import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productSelector } from "../../store/selectors/selectors";
import { getCommentsProduct } from "../../api/api";
import { normalizeDate, sellsFromData } from "../../helper/helper";
import { productUpdate } from "../../store/reducers/reducers";
import Header from "../../components/Header/Header";
import Reviews from "../../components/Reviews/Reviews";
import MainMenu from "../../components/MainMenu/MainMenu";
import PhoneButton from "../../components/PhoneButton/PhoneButton";
import S from "./Product.module.css";

function Product() {
  let product = useSelector(productSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reviewsCheck, setReviewsCheck] = useState(false);
  const [reviewsComments, setReviewsComments] = useState(false);

  if (!product.id) {
    product = JSON.parse(localStorage.getItem("product"));
    dispatch(productUpdate(product));
  }

  const toProfile = () => {
    navigate("/profile-seller");
  };

  const getComments = async () => {
    const resp = await getCommentsProduct({ id: product.id });
    setReviewsComments(resp);
  };

  useEffect(() => {
    getComments();
  });

  return (
    <div className={S.container}>
      {reviewsCheck && <div className={S.cover} />}
      {reviewsCheck && (
        <Reviews
          reviewsComments={reviewsComments}
          setReviewsCheck={setReviewsCheck}
        />
      )}
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
                    src={`http://localhost:8090/${product.images[0].url}`}
                    alt={product.title}
                  />
                ) : (
                  <div className={S.article__NoImgMain} />
                )}
                <div className={S.article__imgBar}>
                  {product.images?.map((img) => (
                    <img
                      className={S.article__imgSide}
                      src={`http://localhost:8090/${img.url}`}
                      alt={product.title}
                      key={img.id}
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
                  <button
                    className={S.article__btn}
                    onClick={() => setReviewsCheck(true)}
                    type="button"
                  >
                    {reviewsComments.length}
                  </button>
                </div>
                <p className={S.article__price}>{product.price} ₽</p>
                <PhoneButton
                  phone={
                    product.user.phone ? product.user.phone : "000 000 00 00"
                  }
                />
                <div className={S.article__author}>
                  {product.user.avatar ? (
                    <img
                      className={S.author__img}
                      src={`http://localhost:8090/${product.user.avatar}`}
                      alt={product.title}
                    />
                  ) : (
                    <div className={S.author__NoImg} />
                  )}
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
