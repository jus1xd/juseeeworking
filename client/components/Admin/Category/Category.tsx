import React from "react";
import s from "./Category.module.css";

import Image from "next/image";
import AdminInput from "../Input/Input";

const Category: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>Admin Panel - Категории</div>
            <div className={s.admin_panel_content}>
              <div className={s.input_container}>
                <div className={s.input_wrapper}>
                  <AdminInput
                    placeholder={"Название категории"}
                    type={"text"}
                  />
                </div>
                <div className={s.btn_wrapper}>
                  <div className={s.main_btn}>Добавить</div>
                </div>
              </div>
              <div className={s.msg_container}>Категория успешно добавлена</div>
              <div className={s.input_container}>
                <div className={s.input_wrapper}>
                  <AdminInput
                    placeholder={"Название категории"}
                    type={"text"}
                  />
                </div>
                <div className={s.btn_wrapper}>
                  <div className={s.remove_btn}>Удалить</div>
                </div>
              </div>
              <div className={s.error_container}>Категория успешно удалена</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
