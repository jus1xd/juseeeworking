import React from "react";
import s from "./Comment.module.css";

import Image from "next/image";

const Comment: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.comment_item}>
          <div className={s.author}>
            <div className={s.author_avatar}>
              <Image src="/img/icons/Software/avatar.svg" width={40} height={40}/>
            </div>
            <div className={s.author_name}>User 7812</div>
          </div>
          <div className={s.comment_text}>
            Hi, I have already downloaded it from the SoftwareLogo website
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
