import React from "react";
import s from "./Create.module.css";

import Image from "next/image";
import AdminInput from "../Input/Input";
import PageItem from "./PageItem/PageItem";

const Create: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>Admin Panel - Создание страницы</div>
            <div className={s.columns_container}>
              <div className={s.column}>
                <div className={s.column_title}>Создание Страницы</div>
                <AdminInput placeholder={"Титул страницы"} type={"text"} />
                <AdminInput
                  placeholder={"Ссылка на фото превью"}
                  type={"text"}
                />
                <AdminInput
                  placeholder={"Ссылка на скачивание файла"}
                  type={"text"}
                />
                <AdminInput
                  placeholder={"Описание софта"}
                  type={"text"}
                  size={"long"}
                />
                <AdminInput
                  placeholder={"Ссылка на первое фото слайдера"}
                  type={"text"}
                />
                <AdminInput
                  placeholder={"Ссылка на второе фото слайдера"}
                  type={"text"}
                />
              </div>
              <div className={s.column}>
                <div className={s.column_title}>General Details</div>
                <AdminInput placeholder={"File Format"} type={"text"} />
                <AdminInput placeholder={"File Size"} type={"text"} />
                <AdminInput placeholder={"Download Source"} type={"text"} />
                <AdminInput placeholder={"Unlock Password"} type={"text"} />
                <div className={s.column}>
                  <div className={s.column_title}>Download Links</div>
                  <AdminInput placeholder={"Mirror link #1"} type={"text"} />
                  <AdminInput placeholder={"Mirror link #2"} type={"text"} />
                </div>
              </div>
              <div className={s.column}>
                <div className={s.column_title}>How to install</div>
                <AdminInput placeholder={"1 point"} type={"text"} />
                <AdminInput placeholder={"2 point"} type={"text"} />
                <AdminInput placeholder={"3 point"} type={"text"} />
                <div className={s.column}>
                  <div className={s.column_title}>Category</div>
                  <AdminInput placeholder={"Категория 1"} type={"text"} />
                  <AdminInput placeholder={"Категория 2"} type={"text"} />
                  <AdminInput placeholder={"Категория 3"} type={"text"} />
                </div>
              </div>
            </div>
            <div className={s.btn_wrapper}>
              <div className={s.main_btn}>Создать страницу</div>
            </div>
            <div className={s.error_container}>
              Не все поля заполнены, заполните поля
            </div>
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>
              Admin Panel - Редактирование и удаление страницы
            </div>
            <div className={s.pages_container}>
              <PageItem />
              <PageItem />
              <PageItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
