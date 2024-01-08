/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import S from "./Slider.module.css";

function Slider({ images }) {
  const [imgNumb, setImgNumb] = useState(0);

  const sliderPrevAndNext = (numb) => {
    setImgNumb((numbPrev) => {
      if (numb + numbPrev === -1) return images.length - 1;
      if (numb + numbPrev === images.length) return 0;
      return numb + numbPrev;
    });
  };

  const sliderDot = (numb) => {
    setImgNumb(numb);
  };

  return (
    <div className={S.slider__container}>
      <button
        className={S.slider__prev}
        onClick={() => sliderPrevAndNext(-1)}
        type="button"
      >
        ❮
      </button>
      {images[0] ? (
        images.map((img, index) => (
          <div className={S.mySlider} key={img.id}>
            <img
              alt=""
              src={`http://localhost:8090/${img.url}`}
              className={
                index === imgNumb ? S.mySlides__img : S.mySlides__hideImg
              }
            />
          </div>
        ))
      ) : (
        <div className={S.noMySlider}>
          <div className={S.mySlides__noImg} />
        </div>
      )}
      <button
        className={S.slider__next}
        onClick={() => sliderPrevAndNext(1)}
        type="button"
      >
        ❯
      </button>
      <div className={S.slider__dot}>
        {images.map((img, index) => (
          <button
            className={index === imgNumb ? S.dot : S.noDot}
            onClick={() => sliderDot(index)}
            key={img.id}
            type="button"
          >
            {null}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
