import React from "react";
import RootWrapper from "../RootWrapper/RootWrapper";
import s from "./Button.module.css";

type TProps = {
  text: string;
};

const Button: React.FC<TProps> = ({ text }): JSX.Element => {
  return (
    <RootWrapper btnColor>
      <a className={s.main_btn}>{text}</a>
    </RootWrapper>
  );
};

export default Button;
