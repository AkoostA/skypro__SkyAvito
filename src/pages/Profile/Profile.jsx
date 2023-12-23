/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/selectors";
import Products from "../../components/Products/Products";
import MainMenu from "../../components/MainMenu/MainMenu";
import Header from "../../components/Header/Header";
import S from "./Profile.module.css";

function Profile() {
  const user = useSelector(userSelector);

  return (
    <div className={S.container}>
      <Header />
      <main className={S.main}>
        <div className={S.main__container}>
          <div className={S.main__center}>
            <MainMenu />
            <h2 className={S.main__name}>{`Здравствуйте, ${user.name}`}</h2>
            <div className={S.main__profile}>
              <div className={S.profile__content}>
                <h3 className={S.profile__title}>Настройки профиля</h3>
                <div className={S.profile__settings}>
                  <div className={S.settings__left}>
                    <div className={S.settings__img} />
                    <Link className={S.settings__change} to="/profile">
                      Заменить
                    </Link>
                  </div>
                  <div className={S.settings__right}>
                    <form className={S.settings__form} action="#">
                      <div className={S.settings__div}>
                        <label
                          className={S.setting__label}
                          htmlFor="first__name"
                        >
                          Имя
                        </label>
                        <input
                          className={S.settings__input}
                          name="first__name"
                          type="text"
                          placeholder={user.name}
                        />
                      </div>
                      <div className={S.settings__div}>
                        <label
                          className={S.setting__label}
                          htmlFor="last__name"
                        >
                          Фамилия
                        </label>
                        <input
                          className={S.settings__input}
                          name="last__name"
                          type="text"
                          placeholder={user.surname}
                        />
                      </div>
                      <div className={S.settings__div}>
                        <label className={S.setting__label} htmlFor="city">
                          Город
                        </label>
                        <input
                          className={S.settings__input}
                          name="city"
                          type="text"
                          placeholder={user.city}
                        />
                      </div>
                      <div className={S.settings__div}>
                        <label className={S.setting__label} htmlFor="phone">
                          Телефон
                        </label>
                        <input
                          className={S.settings__phone}
                          name="phone"
                          type="tel"
                          placeholder={user.phone}
                        />
                      </div>
                      <button className={S.settings__btn} type="button">
                        Сохранить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <h3 className={S.main__title}>Мои товары</h3>
          </div>
          <Products id={user.id} />
        </div>
      </main>
    </div>
  );
}

export default Profile;
