import { useSelector } from "react-redux";
import { productSelector } from "../../store/selectors/selectors";
import { sellsFromData } from "../../helper/helper";
import PhoneButton from "../../components/PhoneButton/PhoneButton";
import Header from "../../components/Header/Header";
import MainMenu from "../../components/MainMenu/MainMenu";
import S from "./ProfileSeller.module.css";

function ProfileSeller() {
  let product = useSelector(productSelector);

  if (!product) product = JSON.parse(localStorage.getItem("product"));

  return (
    <div className={S.container}>
      <Header />
      <main className={S.main}>
        <div className={S.main__container}>
          <div className={S.main__center}>
            <MainMenu />
            <h2 className={S.main__title}>Профиль продавца</h2>
            <div className={S.main__profileSell}>
              <div className={S.profileSell__content}>
                <div className={S.profileSell__seller}>
                  <div className={S.seller__left}>
                    <div className={S.seller__img} />
                  </div>
                  <div className={S.seller__right}>
                    <h3 className={S.seller__title}>{product.user.name}</h3>
                    <p className={S.seller__city}>{product.user.city}</p>
                    <p className={S.seller__inf}>
                      Продает товары с {sellsFromData(product.user.sells_from)}
                    </p>
                    <PhoneButton phone={product.user.phone} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileSeller;
