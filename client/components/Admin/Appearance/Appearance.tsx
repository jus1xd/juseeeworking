import React, {useEffect, useState} from "react";
import s from "./Appearance.module.css";

import Image from "next/image";
import AdminInput from "../Input/Input";
import {ISiteConfig} from "../../../types/config";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import {changeColorsAndSiteLogo} from "../../../store/slices/configSlice";
import {changeSiteConfig} from "../../../store/thunks/condifigThunk";

const Appearance: React.FC = ( {} ): JSX.Element => {
    const [headerColor, setHeaderColor] = useState<string> ( '' )
    const [underHeaderColor, setUnderHeaderColor] = useState<string> ( '' )
    const [fontColor, setFontColorL] = useState<string> ( '' )
    const [backgroundColor, setBackgroundColor] = useState<string> ( '' )
    const [blockBackgroundColor, setBlockBackgroundColor] = useState<string> ( '' )
    const [buttonColor, setButtonColor] = useState<string> ( '' )
    const [buttonHoverColor, setButtonHoverColor] = useState<string> ( '' )
    const [siteLogo, setSiteLogo] = useState<string> ( '' )
    const dispatch = useAppDispatch ()
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
    }
    const config = useAppSelector ( state => state.configSlice.config )
    const username = useAppSelector ( state => state.adminSlice.username )
    const onClickHandler = () => {
        dispatch ( changeColorsAndSiteLogo ( siteColorsAndLogo ) )
    }
    useEffect ( () => {
        dispatch ( changeSiteConfig ( {config, username} ) )
    }, [config] );

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
                                    <AdminInput placeholder={"Цвет хедера"} type={"text"} value={headerColor}
                                                setInputValue={setHeaderColor}/>
                                    <div className={s.color_preview}/>
                                    <div className={s.main_btn} onClick={onClickHandler}>Изменить</div>
                                </div>

                                <div className={s.msg_container}>Цвет успешно изменен</div>

                                <div className={s.colorpicker_row}>
                                    <AdminInput placeholder={"Цвет под хедером"} type={"text"} value={underHeaderColor}
                                                setInputValue={setUnderHeaderColor}/>
                                    <div className={s.color_preview}/>
                                    <div className={s.main_btn} onClick={onClickHandler}>Изменить</div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <AdminInput placeholder={"Цвет шрифта"} type={"text"} value={fontColor}
                                                setInputValue={setFontColorL}/>
                                    <div className={s.color_preview}/>
                                    <div className={s.main_btn} onClick={onClickHandler}>Изменить</div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <AdminInput placeholder={"Цвет заднего фона"} type={"text"} value={backgroundColor}
                                                setInputValue={setBackgroundColor}/>
                                    <div className={s.color_preview}/>
                                    <div className={s.main_btn} onClick={onClickHandler}>Изменить</div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <AdminInput
                                        placeholder={"Цвет заднего фона блока"}
                                        type={"text"}
                                        value={blockBackgroundColor}
                                        setInputValue={setBlockBackgroundColor}
                                    />
                                    <div className={s.color_preview}/>
                                    <div className={s.main_btn} onClick={onClickHandler}>Изменить</div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <AdminInput placeholder={"Цвет кнопки"} type={"text"} value={buttonColor}
                                                setInputValue={setButtonColor}/>
                                    <div className={s.color_preview}/>
                                    <div className={s.main_btn} onClick={onClickHandler}>Изменить</div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <AdminInput
                                        placeholder={"Цвет при Hover кнопки"}
                                        type={"text"}
                                        value={buttonHoverColor}
                                        setInputValue={setButtonHoverColor}
                                    />
                                    <div className={s.color_preview}/>
                                    <div className={s.main_btn} onClick={onClickHandler}>Изменить</div>
                                </div>
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
                                    <div className={s.main_btn} onClick={onClickHandler}>Добавить</div>
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
