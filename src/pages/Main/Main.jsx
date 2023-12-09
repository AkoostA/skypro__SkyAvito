import { Link } from "react-router-dom";
import S from "./Main.module.css";

function Main() {
  return (
    <div className={S.container}>
      <header className={S.header}>
        <nav className={S.header__nav}>
          <button className={S.header__btn} type="button">
            Вход в личный кабинет
          </button>
        </nav>
      </header>
      <main className={S.main}>
        <div className={S.main__search}>
          <Link className={S.main__logo} to="/" />
          <form className={S.search__form}>
            <input
              className={S.search__text}
              type="search"
              placeholder="Поиск по объявлениям"
              name="search"
            />
            <button className={S.search__btn} type="button">
              Найти
            </button>
          </form>
        </div>
        <div className={S.main__container}>
          <h2 className={S.main__title}>Объявления</h2>
          <div className={S.main__content}>
            <div className={S.content__cards}>
              <div className={S.cards__item}>
                <div className={S.cards__card}>
                  <div className={S.card__img}>
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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
                    <Link to="/" />
                  </div>
                  <div className={S.card__content}>
                    <Link to="/">
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

export default Main;
