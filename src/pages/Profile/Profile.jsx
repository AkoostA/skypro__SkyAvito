/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserAvatar, editUser } from "../../api/api";
import { tokenUpdate, userUpdate } from "../../store/reducers/reducers";
import {
  safeTelInput,
  safeTextInput,
  formatUppString,
  pressEnterKey,
} from "../../helper/helper";
import { tokenSelector, userSelector } from "../../store/selectors/selectors";
import Products from "../../components/Products/Products";
import MainMenu from "../../components/MainMenu/MainMenu";
import Header from "../../components/Header/Header";
import S from "./Profile.module.css";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const token = useSelector(tokenSelector);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);
  const [errorLog, setError] = useState(null);

  const editUserData = async ({ avatar }) => {
    try {
      setLoadingImg(true);
      let respNewDataUser;
      if (avatar) {
        const formAvatar = new FormData();
        formAvatar.append("file", avatar);
        respNewDataUser = await editUserAvatar({ formAvatar, token });
      } else {
        respNewDataUser = await editUser({
          name,
          surname,
          city,
          phone,
          token,
        });
      }
      dispatch(userUpdate(respNewDataUser.user));
      dispatch(tokenUpdate(respNewDataUser.newToken));
      localStorage.setItem("user", JSON.stringify(respNewDataUser.user));
      localStorage.setItem("token", JSON.stringify(respNewDataUser.newToken));
    } catch (error) {
      setError(error.message);
    } finally {
      setName("");
      setSurname("");
      setCity("");
      setPhone("");
      setLoadingImg(false);
    }
  };

  useEffect(() => {
    if (!name && !surname && !city && !phone) setDisabled(true);
    if (name || surname || city || phone) setDisabled(false);
    setError(null);
  }, [name, surname, city, phone]);

  return (
    <div className={S.container}>
      <Header />
      <main className={S.main}>
        <div className={S.main__container}>
          <div className={S.main__center}>
            <MainMenu />
            <h2 className={S.main__name}>
              {user.name
                ? `Здравствуйте, ${formatUppString(user.name)}`
                : "Здравствуйте"}
            </h2>
            <div className={S.main__profile}>
              <div className={S.profile__content}>
                <h3 className={S.profile__title}>Настройки профиля</h3>
                <div className={S.profile__settings}>
                  <div className={S.settings__left}>
                    {user.avatar ? (
                      <img
                        className={S.settings__img}
                        src={`http://localhost:8090/${user.avatar}`}
                        alt="avatar"
                      />
                    ) : (
                      <div className={S.settings__NoImg} />
                    )}
                    <label className={S.settings__change} htmlFor="img_uploads">
                      {loadingImg ? "...Фото грузиться" : "Заменить"}
                      <input
                        onChange={(e) =>
                          editUserData({ avatar: e.target.files[0] })
                        }
                        disabled={loadingImg}
                        type="file"
                        id="img_uploads"
                        name="img_uploads"
                        hidden
                      />
                    </label>
                  </div>
                  <div className={S.settings__right}>
                    <form className={S.settings__form} action="#">
                      <div className={S.settings__div}>
                        <label className={S.setting__label} htmlFor="name">
                          Имя
                        </label>
                        <input
                          className={S.settings__input}
                          value={name}
                          onChange={(event) => setName(safeTextInput(event))}
                          onKeyDown={(event) =>
                            pressEnterKey(event, editUserData, disabled)
                          }
                          type="text"
                          name="name"
                          maxLength={20}
                          placeholder={formatUppString(user.name)}
                        />
                      </div>
                      <div className={S.settings__div}>
                        <label className={S.setting__label} htmlFor="surname">
                          Фамилия
                        </label>
                        <input
                          className={S.settings__input}
                          value={surname}
                          onChange={(event) => setSurname(safeTextInput(event))}
                          onKeyDown={(event) =>
                            pressEnterKey(event, editUserData, disabled)
                          }
                          type="text"
                          name="surname"
                          maxLength={20}
                          placeholder={formatUppString(user.surname)}
                        />
                      </div>
                      <div className={S.settings__div}>
                        <label className={S.setting__label} htmlFor="city">
                          Город
                        </label>
                        <input
                          className={S.settings__input}
                          value={city}
                          onChange={(event) => setCity(safeTextInput(event))}
                          onKeyDown={(event) =>
                            pressEnterKey(event, editUserData, disabled)
                          }
                          type="text"
                          name="city"
                          maxLength={20}
                          placeholder={formatUppString(user.city)}
                        />
                      </div>
                      <div className={S.settings__div}>
                        <label className={S.setting__label} htmlFor="phone">
                          Телефон
                        </label>
                        <input
                          className={S.settings__phone}
                          value={phone}
                          onChange={(event) => setPhone(safeTelInput(event))}
                          onKeyDown={(event) =>
                            pressEnterKey(event, editUserData, disabled)
                          }
                          type="tel"
                          name="phone"
                          maxLength={20}
                          placeholder={user.phone}
                        />
                      </div>
                      {errorLog && <span className={S.error}>{errorLog}</span>}
                      <button
                        className={
                          disabled ? S.settingsOff__btn : S.settings__btn
                        }
                        disabled={disabled}
                        onClick={editUserData}
                        type="button"
                      >
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
