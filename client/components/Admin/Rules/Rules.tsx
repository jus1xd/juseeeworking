import React from "react";
import s from "./Rules.module.css";

import Image from "next/image";
import AdminInput from "../Input/Input";

const Rules: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>
              Admin Panel - Правила
            </div>
            <div className={s.admin_panel_content}>
              <div className={s.set_title}>
                <AdminInput placeholder={"Заголовок"} type={"text"} />
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
                pretium semper Lorem ipsum dolor sit amet, consectetur Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Id venenatis
                amet eu et ipsum. Ac, donec viverra tristique elit euismod
                molestie uismod egestas egestas. Sollicitudin sed adipiscing eu,
                ipsum purus et etiam mauris tristique. Consectetur id pretium
                semper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Id venenatis amet eu et ipsum. Ac, donec viverra tristique elit
                euismod molestie uismod egestas egestas. Sollicitudin sed
                adipiscing eu, ipsum purus et etiam mauris tristique.
                Consectetur id pretium semper Consectetur id pretium semper
                Lorem ipsum dolor sit amet, consectetur{" "}
              </div>
              <div className={s.btn_wrapper}>
                <div className={s.main_btn}>Добавить</div>
              </div>
              <div className={s.msg_container}>
                Правила успешно изменены
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
