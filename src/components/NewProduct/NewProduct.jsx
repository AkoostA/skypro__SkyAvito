import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  formatHttp,
  formatSafeString,
  pressEnterKey,
  safePriseInput,
} from "../../helper/helper";
import { addPublish } from "../../api/api";
import { productUpdate, tokenUpdate } from "../../store/reducers/reducers";
import { tokenSelector } from "../../store/selectors/selectors";
import S from "./NewProduct.module.css";

function NewProduct({ setNewProductCheck }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [urlPhotos, setUrlPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkInput = () => {
    if (!title) throw new Error("Не введено название товара");
    if (!description) throw new Error("Нет описания товара");
    if (!price) throw new Error("Не введена цена товара");
    if (!urlPhotos[0]) throw new Error("Нет фото товара");
  };

  const formatFile = ({ newPhoto }) => {
    const formData = new FormData();
    const formatUrlPhoto = URL.createObjectURL(newPhoto);
    formData.append("file", newPhoto);
    setPhotos((prevPhoto) => prevPhoto.concat(formData));
    setUrlPhotos([...urlPhotos, { formatUrlPhoto }]);
  };

  const publish = async () => {
    try {
      setDisabled(true);
      checkInput();
      const newPublish = await addPublish({
        title,
        description,
        price,
        photos,
        token,
      });
      dispatch(productUpdate(newPublish.product));
      dispatch(tokenUpdate(newPublish.newToken));
      localStorage.setItem("product", JSON.stringify(newPublish.product));
      localStorage.setItem("token", JSON.stringify(newPublish.newToken));
      setNewProductCheck(false);
      navigate(
        `/product/${formatHttp(newPublish.product.title)}_${
          newPublish.product.id
        }`,
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [title, description, price, photos]);

  return (
    <div className={S.containerNewProduct}>
      <div className={S.modal__block}>
        <div className={S.modal__content}>
          <h3 className={S.modal__title}>Новое объявление</h3>
          <button
            className={S.btn__cross}
            onClick={() => setNewProductCheck(false)}
            type="button"
          >
            {null}
          </button>
          <form className={S.modal__form} action="#">
            <div className={S.form__block}>
              <h3 className={S.block__title}>Название</h3>
              <input
                className={S.form__textInput}
                value={title}
                onChange={(event) => setTitle(formatSafeString(event))}
                onKeyDown={(event) => pressEnterKey(event, publish, disabled)}
                maxLength={65}
                type="text"
                name="name"
                placeholder="Введите название"
              />
            </div>
            <div className={S.form__block}>
              <h3 className={S.block__title}>Описание</h3>
              <textarea
                className={S.form__textArea}
                value={description}
                onChange={(event) => setDescription(formatSafeString(event))}
                onKeyDown={(event) => pressEnterKey(event, publish, disabled)}
                name="text"
                cols="auto"
                rows="10"
                placeholder="Введите описание"
              />
            </div>
            <div className={S.form__block}>
              <h3 className={S.block__title}>
                Фотографии товара<span>не более 5 фотографий</span>
              </h3>
              <div className={S.form__barImg}>
                <div className={S.form__newImg}>
                  {urlPhotos[0] && (
                    <img
                      className={S.formPhoto}
                      src={urlPhotos[0].formatUrlPhoto}
                      alt=""
                    />
                  )}
                  <label className={S.form__imgCover} htmlFor="img_uploads">
                    {null}
                    <input
                      onChange={(event) =>
                        formatFile({ newPhoto: event.target.files[0] })
                      }
                      type="file"
                      id="img_uploads"
                      name="img_uploads"
                      hidden
                    />
                  </label>
                </div>
                <div className={S.form__newImg}>
                  {urlPhotos[1] && (
                    <img
                      className={S.formPhoto}
                      src={urlPhotos[1].formatUrlPhoto}
                      alt=""
                    />
                  )}
                  <label className={S.form__imgCover} htmlFor="img_uploads">
                    {null}
                    <input
                      onChange={(e) =>
                        formatFile({ newPhoto: e.target.files[0] })
                      }
                      type="file"
                      id="img_uploads"
                      name="img_uploads"
                      hidden
                    />
                  </label>
                </div>
                <div className={S.form__newImg}>
                  {urlPhotos[2] && (
                    <img
                      className={S.formPhoto}
                      src={urlPhotos[2].formatUrlPhoto}
                      alt=""
                    />
                  )}
                  <label className={S.form__imgCover} htmlFor="img_uploads">
                    {null}
                    <input
                      onChange={(e) =>
                        formatFile({ newPhoto: e.target.files[0] })
                      }
                      type="file"
                      id="img_uploads"
                      name="img_uploads"
                      hidden
                    />
                  </label>
                  <img src="" alt="" />
                </div>
                <div className={S.form__newImg}>
                  {urlPhotos[3] && (
                    <img
                      className={S.formPhoto}
                      src={urlPhotos[3].formatUrlPhoto}
                      alt=""
                    />
                  )}
                  <label className={S.form__imgCover} htmlFor="img_uploads">
                    {null}
                    <input
                      onChange={(e) =>
                        formatFile({ newPhoto: e.target.files[0] })
                      }
                      type="file"
                      id="img_uploads"
                      name="img_uploads"
                      hidden
                    />
                  </label>
                  <img src="" alt="" />
                </div>
                <div className={S.form__newImg}>
                  {urlPhotos[4] && (
                    <img
                      className={S.formPhoto}
                      src={urlPhotos[4].formatUrlPhoto}
                      alt=""
                    />
                  )}
                  <label className={S.form__imgCover} htmlFor="img_uploads">
                    {null}
                    <input
                      onChange={(e) =>
                        formatFile({ newPhoto: e.target.files[0] })
                      }
                      type="file"
                      id="img_uploads"
                      name="img_uploads"
                      hidden
                    />
                  </label>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className={S.form__price}>
              <h3 className={S.block__title}>Цена</h3>
              <input
                className={S.form__inputPrice}
                maxLength={10}
                value={price}
                onChange={(event) => setPrice(safePriseInput(event))}
                onKeyDown={(event) => pressEnterKey(event, publish, disabled)}
                type="text"
                name="price"
              />
              <div className={S.form__priceCover} />
            </div>
            <button
              className={S.form__btn}
              onClick={publish}
              disabled={disabled}
              type="button"
            >
              {disabled ? "...Загружается" : "Опубликовать"}
            </button>
            {errorLog && <span className={S.error}>{errorLog}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
