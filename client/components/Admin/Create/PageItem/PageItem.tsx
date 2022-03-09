import Image from "next/image";
import React from "react";
import s from "./PageItem.module.css";

const PageItem: React.FC = ({}): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <div className={s.page_item}>
        <div className={s.item_content}>
          <Image src="/img/SoftCard/cardAvatar.png" width={60} height={60} />
          <div className={s.page_title}>
            Adobe Photoshop ( The last Version )
          </div>
        </div>
        <div className={s.btns_container}>
          <div className={s.main_btn}>Edit</div>
          <div className={s.remove_btn}>Remove</div>
        </div>
      </div>
    </div>
  );
};

export default PageItem;
