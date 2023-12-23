import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { normalizeDate, searchItem } from "../../helper/helper";
import { getAllProducts, getUsersProducts } from "../../api/api";
import { productUpdate, productsUpdate } from "../../store/reducers/reducers";
import {
  productsSelector,
  searchSelector,
} from "../../store/selectors/selectors";
import Skeleton from "../Skeleton/Skeleton";
import S from "./Products.module.css";

function Products({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const products = useSelector(productsSelector);
  const search = useSelector(searchSelector);
  const [loading, setLoading] = useState(true);

  const productDetail = (product) => {
    dispatch(productUpdate(product));
    localStorage.setItem("product", JSON.stringify(product));
    navigate("/product");
  };

  const getProducts = async () => {
    if (location === "/") {
      const respAllProducts = await getAllProducts();
      dispatch(productsUpdate(respAllProducts));
    } else {
      const respUserProducts = await getUsersProducts({ id });
      dispatch(productsUpdate(respUserProducts));
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={S.main__content}>
      <div className={S.content__cards}>
        {loading ? (
          <Skeleton items={10} w="270px" h="270px" />
        ) : (
          products.map((product) => (
            <div
              className={searchItem(product.title, search) ? S.item : S.hide}
              key={product.id}
            >
              <div className={S.cards__card}>
                {product.images[0] ? (
                  <img
                    className={S.card__img}
                    src={`http://localhost:8090/${product.images[0].url}`}
                    alt={product.title}
                  />
                ) : (
                  <div className={S.noImg} />
                )}
                <div className={S.card__content}>
                  <button
                    className={S.card__btn}
                    onClick={() => productDetail(product)}
                    type="button"
                  >
                    {product.title}
                  </button>
                  <p className={S.card__price}>{product.price} ₽</p>
                  <p className={S.card__place}>{product.user.city}</p>
                  <p className={S.card__date}>
                    {normalizeDate(product.created_on)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
