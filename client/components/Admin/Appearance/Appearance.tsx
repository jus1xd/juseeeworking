import React from "react";
import s from "./Appearance.module.css";

import Image from "next/image";
import AdminInput from "../Input/Input";

const Appearance: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>Admin Panel - Внешний вид</div>
            <div className={s.columns_container}>
              <div className={s.column}>
                <div className={s.column_title}>Цвета сайта</div>

                <div className={s.colorpicker_row}>
                  <AdminInput placeholder={"Цвет хедера"} type={"text"} />
                  <div className={s.color_preview}></div>
                  <div className={s.main_btn}>Изменить</div>
                </div>

                <div className={s.msg_container}>Цвет успешно изменен</div>

                <div className={s.colorpicker_row}>
                  <AdminInput placeholder={"Цвет под хедером"} type={"text"} />
                  <div className={s.color_preview}></div>
                  <div className={s.main_btn}>Изменить</div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput placeholder={"Цвет под хедером"} type={"text"} />
                  <div className={s.color_preview}></div>
                  <div className={s.main_btn}>Изменить</div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput placeholder={"Цвет шрифта"} type={"text"} />
                  <div className={s.color_preview}></div>
                  <div className={s.main_btn}>Изменить</div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput placeholder={"Цвет заднего фона"} type={"text"} />
                  <div className={s.color_preview}></div>
                  <div className={s.main_btn}>Изменить</div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Цвет заднего фона блока"}
                    type={"text"}
                  />
                  <div className={s.color_preview}></div>
                  <div className={s.main_btn}>Изменить</div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput placeholder={"Цвет кнопки"} type={"text"} />
                  <div className={s.color_preview}></div>
                  <div className={s.main_btn}>Изменить</div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Цвет при Hover кнопки"}
                    type={"text"}
                  />
                  <div className={s.color_preview}></div>
                  <div className={s.main_btn}>Изменить</div>
                </div>
              </div>
              <div className={s.column}>
                <div className={s.column_title}>Загрузить Логотип</div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Ссылка на логотип сайта"}
                    type={"text"}
                  />
                  <div className={s.main_btn}>Добавить</div>
                </div>
                <div className={s.msg_container}>Логотип успешно изменен</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appearance;
