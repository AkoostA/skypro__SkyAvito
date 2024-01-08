import { useSelector } from "react-redux";
import { formatSellsDate } from "../../helper/helper";
import {
  addProductSelector,
  productSelector,
} from "../../store/selectors/selectors";
import Header from "../../components/Header/Header";
import MainMenu from "../../components/MainMenu/MainMenu";
import Products from "../../components/Products/Products";
import NewProduct from "../../components/NewProduct/NewProduct";
import PhoneButton from "../../components/PhoneButton/PhoneButton";
import S from "./ProfileSeller.module.css";

function ProfileSeller() {
  const product = useSelector(productSelector);
  const addProductCheck = useSelector(addProductSelector);

  return (
    <div className={S.container}>
      <Header />
      {addProductCheck && <div className={S.cover} />}
      {addProductCheck && <NewProduct />}
      <main className={S.main}>
        <div className={S.main__container}>
          <div className={S.main__center}>
            <MainMenu />
            <h2 className={S.main__title}>Профиль продавца</h2>
            <div className={S.main__profileSell}>
              <div className={S.profileSell__content}>
                <div className={S.profileSell__seller}>
                  <div className={S.seller__left}>
                    {product.user.avatar ? (
                      <img
                        className={S.seller__img}
                        src={`http://localhost:8090/${product.user.avatar}`}
                        alt={product.title}
                      />
                    ) : (
                      <div className={S.seller__NoImg} />
                    )}
                  </div>
                  <div className={S.seller__right}>
                    <h3 className={S.seller__title}>{product.user.name}</h3>
                    <p className={S.seller__city}>{product.user.city}</p>
                    <p className={S.seller__inf}>
                      Продает товары с{" "}
                      {formatSellsDate(product.user.sells_from)}
                    </p>
                    <PhoneButton
                      phone={
                        product.user.phone
                          ? product.user.phone
                          : "000 000 00 00"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <h3 className={S.main__title}>Товары продавца</h3>
          </div>
          <Products id={product.user.id} />
        </div>
      </main>
    </div>
  );
}

export default ProfileSeller;
