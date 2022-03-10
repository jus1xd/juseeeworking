import React from "react";
import s from "./Help.module.css";

import Image from "next/image";
import AdminInput from "../Input/Input";

const Help: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>Admin Panel - Помощь</div>
            <div className={s.admin_panel_content}>
              <div className={s.inputs_container}>
                <div className={s.set_title}>
                  <AdminInput placeholder={"Заголовок"} type={"text"} />
                </div>
                <div className={s.set_title}>
                  <AdminInput
                    placeholder={"Ссылка на картинку"}
                    type={"text"}
                  />
                </div>
              </div>
              <div className={s.rules_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                venenatis amet eu et ipsum. Ac, donec viverra tristique elit
                euismod molestie uismod egestas egestas. Sollicitudin sed
                adipiscing eu, ipsum purus et etiam mauris tristique.
                Consectetur id pretium semper Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Id venenatis amet eu et ipsum. Ac,
                donec viverra tristique elit euismod molestie uismod egestas
                egestas. Sollicitudin sed adipiscing eu, ipsum purus et etiam
                mauris tristique. Consectetur id pretium semper Consectetur id
                pretium
              </div>
              <div className={s.rules_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                venenatis amet eu et ipsum. Ac, donec viverra tristique elit
                euismod molestie uismod egestas egestas. Sollicitudin sed
                adipiscing eu, ipsum purus et etiam mauris tristique.
                Consectetur id pretium semper Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Id venenatis amet eu et ipsum. Ac,
                donec viverra tristique elit euismod molestie uismod egestas
                egestas. Sollicitudin sed adipiscing eu, ipsum purus et etiam
                mauris tristique. Consectetur id pretium semper Consectetur id
                pretium
              </div>
              <div className={s.btn_wrapper}>
                <div className={s.main_btn}>Добавить</div>
              </div>
              <div className={s.msg_container}>Помощь успешно изменен</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
