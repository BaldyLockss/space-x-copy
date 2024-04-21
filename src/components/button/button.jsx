import React from "react";
import s from "./button.module.css";
const Button = ({ btn, href }) => {
  return (
    <>
      <a className={s.btn} href={href}>
        {btn}
      </a>
    </>
  );
};

export default Button;
