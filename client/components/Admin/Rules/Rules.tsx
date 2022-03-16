import React, { useState } from "react";
import s from "./Rules.module.css";
import AdminInput from "../Input/Input";
import { useAppDispatch } from "../../../hooks/useTypedSelector";
import { changeTof } from "../../../store/slices/configSlice";
import RootWrapper from "../../RootWrapper/RootWrapper";

const Rules: React.FC = ({}): JSX.Element => {
  const [tofTitle, setTofTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    dispatch(changeTof({ tofTitle, description }));
  };
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <RootWrapper blockBg>
              <div className={s.inner_title}>Admin Panel - Правила</div>
            </RootWrapper>
            <div className={s.admin_panel_content}>
              <div className={s.set_title}>
                <AdminInput
                  placeholder={"Заголовок"}
                  type={"text"}
                  value={tofTitle}
                  setInputValue={setTofTitle}
                />
              </div>
              <AdminInput
                placeholder={"Заголовок"}
                type={"text"}
                value={description}
                setInputValue={setDescription}
                textArea
              />
              <div className={s.btn_wrapper} onClick={onClickHandler}>
                <div className={s.main_btn}>Добавить</div>
              </div>
              <div className={s.msg_container}>Правила успешно изменены</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
