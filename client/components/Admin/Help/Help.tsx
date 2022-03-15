import React, { useEffect, useState } from "react";
import s from "./Help.module.css";
import AdminInput from "../Input/Input";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { changeHelp } from "../../../store/slices/configSlice";
import { changeSiteConfig } from "../../../store/thunks/condifigThunk";

const Help: React.FC = ({}): JSX.Element => {
  const [helpTitle, setHelpTitle] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");
  const [firstBlock, setFirstBlock] = useState<string>("");
  const [secondTextBlock, setSecondTextBlock] = useState<string>("");
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.configSlice.config);
  const username = useAppSelector((state) => state.adminSlice.username);
  const onClickHandler = () => {
    dispatch(changeHelp({ helpTitle, imageLink, firstBlock, secondTextBlock }));
  };
  useEffect(() => {
    dispatch(changeSiteConfig({ config, username }));
  }, [config]);
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>Admin Panel - Помощь</div>
            <div className={s.admin_panel_content}>
              <div className={s.inputs_container}>
                <div className={s.set_title}>
                  <AdminInput
                    placeholder={"Заголовок"}
                    type={"text"}
                    value={helpTitle}
                    setInputValue={setHelpTitle}
                  />
                </div>
                <div className={s.set_title}>
                  <AdminInput
                    placeholder={"Ссылка на картинку"}
                    type={"text"}
                    value={imageLink}
                    setInputValue={setImageLink}
                  />
                </div>
              </div>
              <AdminInput
                placeholder={"Помощь..."}
                type={"text"}
                value={firstBlock}
                textArea
                setInputValue={setFirstBlock}
              />
              <AdminInput
                placeholder={"Помощь..."}
                type={"text"}
                textArea
                value={secondTextBlock}
                setInputValue={setSecondTextBlock}
              />
              <div className={s.btn_wrapper}>
                <div className={s.main_btn} onClick={onClickHandler}>
                  Добавить
                </div>
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
