/* eslint-disable jsx-a11y/label-has-associated-control */
import { commentData } from "../../helper/helper";
import S from "./Reviews.module.css";

function Reviews({ reviewsComments, setReviewsCheck }) {

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
              <div className={S.formNewArt__block}>
                <label className={S.from__label} htmlFor="text">
                  Добавить отзыв
                </label>
                <textarea
                  className={S.formNewArt__area}
                  name="text"
                  rows="5"
                  placeholder="Введите описание"
                />
              </div>
              <button className={S.newArt__btn} type="button">
                Опубликовать
              </button>
            </form>
            {reviewsComments.map((comment) => (
              <div className={S.modal__reviews} key={comment.id}>
                <div className={S.reviews__review}>
                  <div className={S.review__item}>
                    <div className={S.review__left}>
                      <div className={S.review__img} />
                    </div>
                    <div className={S.review__right}>
                      <p className={S.review__name}>
                        {comment.author.name}{" "}
                        <span>{commentData(comment.created_on)}</span>
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
