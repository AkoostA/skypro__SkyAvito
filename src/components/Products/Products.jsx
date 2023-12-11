import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { normalizeDate, searchItem } from "../../helper/helper";
import { productsUpdate } from "../../store/reducers/reducers";
import { getAllProducts } from "../../api/api";
import {
  productsSelector,
  searchSelector,
} from "../../store/selectors/selectors";
import S from "./Products.module.css";

function Products() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const products = useSelector(productsSelector);
  const search = useSelector(searchSelector);

  const allProducts = async () => {
    const resp = await getAllProducts();
    dispatch(productsUpdate(resp));
  };

  useEffect(() => {
    if (location === "/") allProducts();
  }, []);

  return (
    <div className={S.main__content}>
      <div className={S.content__cards}>
        {products.map((product) => (
          <div
            className={searchItem(product.title, search) ? S.item : S.hide}
            key={product.id}
          >
            <div className={S.cards__card}>
              {product.images[0] ? (
                <img
                  className={S.card__img}
                  src={`http://127.0.0.1:8090/${product.images[0].url}`}
                  alt={product.title}
                />
              ) : (
                <div className={S.noImg} />
              )}
              <div className={S.card__content}>
                <Link to="/">
                  <h3 className={S.card__title}>{product.title}</h3>
                </Link>
                <p className={S.card__price}>{product.price} ₽</p>
                <p className={S.card__place}>{product.user.city}</p>
                <p className={S.card__date}>
                  {normalizeDate(product.created_on)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
