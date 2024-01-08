/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../api/api";
import { formatCommentDate, formatSafeString } from "../../helper/helper";
import { tokenUpdate } from "../../store/reducers/reducers";
import S from "./Reviews.module.css";

function Reviews({
  token,
  user,
  product,
  getComments,
  reviewsComments,
  setReviewsCheck,
}) {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);
  const dispatch = useDispatch();

  const checkInput = () => {
    if (!text) throw new Error("Нельзя отправить пустой комментарий");
  };

  const newReviews = async () => {
    try {
      setDisabled(true);
      checkInput();
      const respAddComment = await addComment({
        text,
        token,
        id: product.id,
      });
      await getComments();
      dispatch(tokenUpdate(respAddComment.newToken));
      localStorage.setItem("token", JSON.stringify(respAddComment.newToken));
    } catch (error) {
      setError(error.message);
    } finally {
      setText("");
      setDisabled(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [text]);

  return (
    <div className={S.containerReviews}>
      <div className={S.modal__block}>
        <div className={S.modal__content}>
          <h3 className={S.modal__title}>Отзывы о товаре</h3>
          <button
            className={S.btn__cross}
            onClick={() => setReviewsCheck(false)}
            type="button"
          >
            {null}
          </button>
          <div className={S.modal__scroll}>
            <form className={S.modal__formNewArt} action="#">
              {user.id ? (
                <>
                  <div className={S.formNewArt__block}>
                    <label className={S.from__label} htmlFor="text">
                      Добавить отзыв
                    </label>
                    <textarea
                      className={S.formNewArt__area}
                      value={text}
                      onChange={(event) => setText(formatSafeString(event))}
                      name="text"
                      rows="5"
                      placeholder="Ваш отзыв"
                    />
                  </div>
                  <button
                    className={S.newArt__btn}
                    onClick={newReviews}
                    disabled={disabled}
                    type="button"
                  >
                    Опубликовать
                  </button>
                  {errorLog && <span className={S.error}>{errorLog}</span>}
                </>
              ) : null}
            </form>
            {reviewsComments.map((comment) => (
              <div className={S.modal__reviews} key={comment.id}>
                <div className={S.reviews__review}>
                  <div className={S.review__item}>
                    <div className={S.review__left}>
                      {comment.author.avatar ? (
                        <img
                          className={S.review__img}
                          src={`http://localhost:8090/${comment.author.avatar}`}
                          alt={comment.author.name}
                        />
                      ) : (
                        <div className={S.review__noImg} />
                      )}
                    </div>
                    <div className={S.review__right}>
                      <p className={S.review__name}>
                        {comment.author.name}{" "}
                        <span>{formatCommentDate(comment.created_on)}</span>
                      </p>
                      <h5 className={S.review__title}>Комментарий</h5>
                      <p className={S.review__text}>{comment.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
