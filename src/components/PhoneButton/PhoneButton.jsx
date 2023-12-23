import { useState } from "react";
import S from "./PhoneButton.module.css";

function PhoneButton({ phone }) {
  const [checkPhone, setCheckPhone] = useState(false);

  const onPhone = () => {
    setCheckPhone((prev) => !prev);
  };

  return (
    <button className={S.article__btn} onClick={onPhone} type="button">
      {checkPhone ? null : "Показать телефон"}
      <span>{checkPhone ? phone : `${phone.substring(0, 4)} XXX XX XX`}</span>
    </button>
  );
}

export default PhoneButton;
