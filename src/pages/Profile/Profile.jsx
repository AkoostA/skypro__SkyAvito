/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from "react-router-dom";
import S from "./Profile.module.css";

function Profile() {
  return (
    <div className={S.container}>
      <header className={S.header}>
        <nav className={S.header__nav}>
          <button className={S.btn__put} type="button">
            Разместить объявление
          </button>
          <button className={S.btn__personal} type="button">
            Личный кабинет
          </button>
        </nav>
      </header>
      <main className={S.main}>
        <div className={S.main__container}>
          <div className={S.main__center}>
            <div className={S.main__menu}>
              <Link className={S.menu__logo} to="/" />
              <form className={S.menu__form} action="#">
                <button className={S.menu__btn} type="button">
                  Вернуться на&nbsp;главную
                </button>
              </form>
            </div>
            <h2 className={S.main__name}>Здравствуйте, Антон!</h2>
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
                          placeholder=""
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
                          placeholder=""
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
                          placeholder=""
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
                          placeholder=""
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
          <div className={S.main__content}>
            <div className={S.content__cards}>
              <div className={S.cards__item}>
                <div className={S.cards__card}>
                  <div className={S.card__img}>
                    <Link to="/profile" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/profile">
                      <h3 className={S.card__title}>
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </Link>
                    <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                    <p className={S.card__place}>Санкт Петербург</p>
                    <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>
              <div className={S.cards__item}>
                <div className={S.cards__card}>
                  <div className={S.card__img}>
                    <Link to="/profile" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/profile">
                      <h3 className={S.card__title}>
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </Link>
                    <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                    <p className={S.card__place}>Санкт Петербург</p>
                    <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>
              <div className={S.cards__item}>
                <div className={S.cards__card}>
                  <div className={S.card__img}>
                    <Link to="/profile" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/profile">
                      <h3 className={S.card__title}>
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </Link>
                    <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                    <p className={S.card__place}>Санкт Петербург</p>
                    <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>
              <div className={S.cards__item}>
                <div className={S.cards__card}>
                  <div className={S.card__img}>
                    <Link to="/profile" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/profile">
                      <h3 className={S.card__title}>
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </Link>
                    <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                    <p className={S.card__place}>Санкт Петербург</p>
                    <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>
              <div className={S.cards__item}>
                <div className={S.cards__card}>
                  <div className={S.card__img}>
                    <Link to="/profile" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/profile">
                      <h3 className={S.card__title}>
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </Link>
                    <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                    <p className={S.card__place}>Санкт Петербург</p>
                    <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>
              <div className={S.cards__item}>
                <div className={S.cards__card}>
                  <div className={S.card__img}>
                    <Link to="/profile" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/profile">
                      <h3 className={S.card__title}>
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </Link>
                    <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                    <p className={S.card__place}>Санкт Петербург</p>
                    <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
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

export default Profile;
