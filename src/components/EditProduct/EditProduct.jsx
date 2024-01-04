import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  formatHttp,
  formatSafeString,
  pressEnterKey,
  safePriseInput,
} from "../../helper/helper";
import { addPublish, editPublish } from "../../api/api";
import { productUpdate, tokenUpdate } from "../../store/reducers/reducers";
import S from "./EditProduct.module.css";

function EditProduct({ token, product, setEditCheck }) {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [urlPhotos, setUrlPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [copyPhotos, setCopyPhotos] = useState([]);
  const [crutch, setCrutch] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkInput = () => {
    if (!title) throw new Error("Не введено название товара");
    if (!description) throw new Error("Нет описания товара");
    if (!price) throw new Error("Не введена цена товара");
    if (!urlPhotos[0]) throw new Error("Нет фото товара");
  };

  const formatFile = ({ newPhoto, i }) => {
    const formData = new FormData();
    const formatUrlPhoto = URL.createObjectURL(newPhoto);
    formData.append("file", newPhoto);

    if (urlPhotos[i]) {
      photos.splice(i, 1, formData);
      urlPhotos.splice(i, 1, { formatUrlPhoto });
      setCrutch((prevCrutch) => !prevCrutch);
    } else {
      for (let index = 0; index < photos.length; index += 1) {
        if (!photos[index]) {
          photos.splice(index, 1, formData);
          urlPhotos.splice(index, 1, { formatUrlPhoto });
          setCrutch((prevCrutch) => !prevCrutch);
          return;
        }
      }
    }
  };

  const editProduct = async () => {
    try {
      setDisabled(true);
      checkInput();
      const respEditPublish = await editPublish({
        title,
        description,
        price,
        token,
        photos,
        copyPhotos,
        product,
      });
      dispatch(tokenUpdate(respEditPublish.newToken));
      dispatch(productUpdate(respEditPublish.newProduct));
      localStorage.setItem("token", JSON.stringify(respEditPublish.newToken));
      localStorage.setItem(
        "product",
        JSON.stringify(respEditPublish.newProduct),
      );
      setEditCheck(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
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
      setEditCheck(false);
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
    setPhotos([]);
    setUrlPhotos([]);
    setCopyPhotos([]);
    for (let i = 0; i < 5; i += 1) {
      setPhotos((imgPrev) => imgPrev.concat(product.images[i]));
      setUrlPhotos((imgPrev) => imgPrev.concat(product.images[i]));
      setCopyPhotos((imgPrev) => imgPrev.concat(product.images[i]));
    }
  }, []);

  useEffect(() => {
    setError(null);
  }, [title, description, price, photos, crutch]);

  return (
    <div className={S.containerNewProduct}>
      <div className={S.modal__block}>
        <div className={S.modal__content}>
          <h3 className={S.modal__title}>Редактировать объявление</h3>
          <button
            className={S.btn__cross}
            onClick={() => setEditCheck(false)}
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
                {urlPhotos.map((urlPhoto, i) => (
                  <div className={S.form__newImg}>
                    <label className={S.form__imgCover} htmlFor={`img_${i}`}>
                      {null}
                      <input
                        onChange={(event) =>
                          formatFile({
                            newPhoto: event.target.files[0],
                            i,
                          })
                        }
                        type="file"
                        id={`img_${i}`}
                        name="img_uploads"
                        hidden
                      />
                      {urlPhoto && (
                        <img
                          className={S.formPhoto}
                          src={
                            urlPhoto.formatUrlPhoto
                              ? urlPhoto.formatUrlPhoto
                              : `http://localhost:8090/${urlPhoto.url}`
                          }
                          alt=""
                        />
                      )}
                    </label>
                  </div>
                ))}
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
              onClick={editProduct}
              disabled={disabled}
              type="button"
            >
              {disabled ? "...Сохраняется" : "Сохранить"}
            </button>
            {errorLog && <span className={S.error}>{errorLog}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
