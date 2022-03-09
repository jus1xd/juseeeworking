import React from "react";
import s from "./Tag.module.css";

type TProps = {
  tagText: string
}

const Tag: React.FC<TProps> = ({tagText}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        {tagText}
      </div>
    </>
  );
};

export default Tag;
