import React, { useEffect, useState } from "react";
import s from "./Appearance.module.css";

import Image from "next/image";
import AdminInput from "../Input/Input";
import { ISiteConfig } from "../../../types/config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { changeColorsAndSiteLogo } from "../../../store/slices/configSlice";
import { changeSiteConfig } from "../../../store/thunks/configThunk";
import Button from "../../Button/Button";
import RootWrapper from "../../RootWrapper/RootWrapper";

const Appearance: React.FC = ({}): JSX.Element => {
  const colorConfig = useAppSelector(
    (state) => state.configSlice.config.colors
  );
  const config = useAppSelector((state) => state.configSlice.config);
  const username = useAppSelector((state) => state.adminSlice.username);
  const [headerColor, setHeaderColor] = useState<string>(
    colorConfig.headerColor
  );
  const [underHeaderColor, setUnderHeaderColor] = useState<string>(
    colorConfig.underHeaderColor
  );
  const [fontColor, setFontColor] = useState<string>(colorConfig.fontColor);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    colorConfig.backgroundColor
  );
  const [blockBackgroundColor, setBlockBackgroundColor] = useState<string>(
    colorConfig.blockBackgroundColor
  );
  const [buttonColor, setButtonColor] = useState<string>(
    colorConfig.buttonColor
  );
  const [buttonHoverColor, setButtonHoverColor] = useState<string>(
    colorConfig.buttonHoverColor
  );
  const [siteLogo, setSiteLogo] = useState<string>(config.siteLogo);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const siteColorsAndLogo = {
    colors: {
      headerColor,
      underHeaderColor,
      fontColor,
      backgroundColor,
      blockBackgroundColor,
      buttonColor,
      buttonHoverColor,
    },
    siteLogo,
  };
  const onClickHandler = () => {
    if (
      Object.values(siteColorsAndLogo.colors).every(
        (item) => item.length != 0
      ) &&
      siteLogo != ""
    ) {
      dispatch(changeColorsAndSiteLogo(siteColorsAndLogo));
      setIsEdit(true);
      setIsEmpty(false);
    } else {
      setIsEmpty(true), setIsEdit(false);
    }
  };
  useEffect(() => {
    dispatch(changeSiteConfig({ config, username }));
  }, [config]);

  const changeColorHandler = (e: any) => {
    setHeaderColor(e.target.value);
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <RootWrapper blockBg>
              <div className={s.inner_title}>Admin Panel - Внешний вид</div>
            </RootWrapper>
            <div className={s.columns_container}>
              <div className={s.column}>
                <div className={s.column_title}>Цвета сайта</div>

                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Цвет хедера"}
                    type={"text"}
                    value={headerColor}
                    setInputValue={setHeaderColor}
                  />
                  <div className={s.color_holder}>
                    <input
                      type="color"
                      className={s.color_input}
                      value={headerColor}
                      onChange={(e) => changeColorHandler(e)}
                    />
                  </div>
                  <div className={s.main_btn} onClick={onClickHandler}>
                    <Button text={"Изменить"} />
                  </div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Цвет под хедером"}
                    type={"text"}
                    value={underHeaderColor}
                    setInputValue={setUnderHeaderColor}
                  />
                  <div className={s.color_holder}>
                    <input
                      type="color"
                      className={s.color_input}
                      value={underHeaderColor}
                      onChange={(e) => setUnderHeaderColor(e.target.value)}
                    />
                  </div>
                  <div className={s.main_btn} onClick={onClickHandler}>
                    <Button text={"Изменить"} />
                  </div>
                </div>
                <div className={s.colorpicker_row}>
                  {/*<AdminInput*/}
                  {/*  placeholder={"Цвет шрифта"}*/}
                  {/*  type={"text"}*/}
                  {/*  value={fontColor}*/}
                  {/*  setInputValue={setFontColor}*/}
                  {/*/>*/}
                  {/*<RootWrapper underHeadColor>*/}
                  {/*  <div className={s.color_preview} />*/}
                  {/*</RootWrapper>*/}
                  {/*<div className={s.main_btn} onClick={onClickHandler}>*/}
                  {/*  <Button text={"Изменить"} />*/}
                  {/*</div>*/}
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Цвет заднего фона"}
                    type={"text"}
                    value={backgroundColor}
                    setInputValue={setBackgroundColor}
                  />
                  <div className={s.color_holder}>
                    <input
                      type="color"
                      className={s.color_input}
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                    />
                  </div>

                  <div className={s.main_btn} onClick={onClickHandler}>
                    <Button text={"Изменить"} />
                  </div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Цвет заднего фона блока"}
                    type={"text"}
                    value={blockBackgroundColor}
                    setInputValue={setBlockBackgroundColor}
                  />
                  <div className={s.color_holder}>
                    <input
                      type="color"
                      className={s.color_input}
                      value={blockBackgroundColor}
                      onChange={(e) => setBlockBackgroundColor(e.target.value)}
                    />
                  </div>

                  <div className={s.main_btn} onClick={onClickHandler}>
                    <Button text={"Изменить"} />
                  </div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Цвет кнопки"}
                    type={"text"}
                    value={buttonColor}
                    setInputValue={setButtonColor}
                  />
                  <div className={s.color_holder}>
                    <input
                      type="color"
                      className={s.color_input}
                      value={buttonColor}
                      onChange={(e) => setButtonColor(e.target.value)}
                    />
                  </div>

                  <div className={s.main_btn} onClick={onClickHandler}>
                    <Button text={"Изменить"} />
                  </div>
                </div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Цвет при Hover кнопки"}
                    type={"text"}
                    value={buttonHoverColor}
                    setInputValue={setButtonHoverColor}
                  />
                  <div className={s.color_holder}>
                    <input
                      type="color"
                      className={s.color_input}
                      value={buttonHoverColor}
                      onChange={(e) => setButtonHoverColor(e.target.value)}
                    />
                  </div>
                  <div className={s.main_btn} onClick={onClickHandler}>
                    <Button text={"Изменить"} />
                  </div>
                </div>
                {isEdit && (
                  <div className={s.msg_container}>
                    Цвета и логотип успешно изменены
                  </div>
                )}
                {isEmpty && (
                  <div className={s.msg_container_red}>
                    Не все поля заполнены
                  </div>
                )}
              </div>
              <div className={s.column}>
                <div className={s.column_title}>Загрузить Логотип</div>
                <div className={s.colorpicker_row}>
                  <AdminInput
                    placeholder={"Ссылка на логотип сайта"}
                    type={"text"}
                    value={siteLogo}
                    setInputValue={setSiteLogo}
                  />
                  <div className={s.main_btn} onClick={onClickHandler}>
                    <Button text={"Изменить"} />
                  </div>
                </div>
                {siteLogo == "" && (
                  <div className={s.msg_container_red}>Поле не заполнено</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appearance;
