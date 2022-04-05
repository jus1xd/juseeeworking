import React, {useEffect, useState} from "react";
import s from "./Appearance.module.css";

import Image from "next/image";
import AdminInput from "../Input/Input";
import {ISiteConfig} from "../../../types/config";
import {
    useAppDispatch,
    useAppSelector,
} from "../../../hooks/useTypedSelector";
import {changeColorsAndSiteLogo} from "../../../store/slices/configSlice";
import {changeSiteConfig} from "../../../store/thunks/configThunk";
import Button from "../../Button/Button";
import RootWrapper from "../../RootWrapper/RootWrapper";

const Appearance: React.FC = ( {} ): JSX.Element => {
    const colorConfig = useAppSelector (
        ( state ) => state.configSlice.config.colors
    );
    const config = useAppSelector ( ( state ) => state.configSlice.config );
    const username = useAppSelector ( ( state ) => state.adminSlice.username );
    const [headerColor, setHeaderColor] = useState<string> ( colorConfig.headerColor );
    const [underHeaderColor, setUnderHeaderColor] = useState<string> ( colorConfig.underHeaderColor );
    const [fontColor, setFontColor] = useState<string> ( colorConfig.fontColor );
    const [backgroundColor, setBackgroundColor] = useState<string> ( colorConfig.backgroundColor );
    const [blockBackgroundColor, setBlockBackgroundColor] = useState<string> ( colorConfig.blockBackgroundColor );
    const [buttonColor, setButtonColor] = useState<string> ( colorConfig.buttonColor );
    const [buttonHoverColor, setButtonHoverColor] = useState<string> ( colorConfig.buttonHoverColor );
    const [blockBorderColor, setBlockBorderColor] = useState<string> ( colorConfig.blockBorderColor );
    const [tooltipBorderColor, setTooltipBorderColor] = useState<string> ( colorConfig.tooltipBorderColor );
    const [siteLogo, setSiteLogo] = useState<string> ( config.siteLogo );
    const [isEdit, setIsEdit] = useState<boolean> ( false );
    const [isEmpty, setIsEmpty] = useState<boolean> ( false );
    const dispatch = useAppDispatch ();

    const siteColorsAndLogo = {
        colors: {
            headerColor,
            underHeaderColor,
            fontColor,
            backgroundColor,
            blockBackgroundColor,
            buttonColor,
            buttonHoverColor,
            blockBorderColor,
            tooltipBorderColor
        },
        siteLogo,
    };
    const onClickHandler = () => {
        if (
            Object.values ( siteColorsAndLogo.colors ).every (
                ( item ) => item.length != 0
            ) &&
            siteLogo != ""
        ) {
            dispatch ( changeColorsAndSiteLogo ( siteColorsAndLogo ) );
            setIsEdit ( true );
            setIsEmpty ( false );
        } else {
            setIsEmpty ( true ), setIsEdit ( false );
        }
    };
    useEffect ( () => {
        dispatch ( changeSiteConfig ( {config, username} ) );
    }, [config] );
    const borderColor = useAppSelector ( state => state.configSlice.config.colors.blockBorderColor )
    const styles = {
        border: `1px solid ${borderColor}`,
    };
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.inner} style={styles}>
                        <RootWrapper blockBg>
                            <div className={s.inner_title}>Admin Panel - Внешний вид</div>
                        </RootWrapper>
                        <div className={s.columns_container}>
                            <div className={s.column}>
                                <div className={s.column_title}>Цвета сайта</div>
                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>Цвет хедера</div>
                                    <div className={s.glob_input_inner}>
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
                                                onChange={( e ) => setHeaderColor ( e.target.value )}
                                            />
                                        </div>
                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>Цвет под хедером</div>
                                    <div className={s.glob_input_inner}>
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
                                                onChange={( e ) => setUnderHeaderColor ( e.target.value )}
                                            />
                                        </div>
                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>Цвет заднего фона</div>
                                    <div className={s.glob_input_inner}>
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
                                                onChange={( e ) => setBackgroundColor ( e.target.value )}
                                            />
                                        </div>

                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>
                                        Цвет заднего фона блока
                                    </div>
                                    <div className={s.glob_input_inner}>
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
                                                onChange={( e ) =>
                                                    setBlockBackgroundColor ( e.target.value )
                                                }
                                            />
                                        </div>

                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>Цвет кнопки</div>
                                    <div className={s.glob_input_inner}>
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
                                                onChange={( e ) => setButtonColor ( e.target.value )}
                                            />
                                        </div>

                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>Цвет шрифта</div>
                                    <div className={s.glob_input_inner}>
                                        <AdminInput
                                            placeholder={"Цвет шрифта"}
                                            type={"text"}
                                            value={fontColor}
                                            setInputValue={setFontColor}
                                        />
                                        <div className={s.color_holder}>
                                            <input
                                                type="color"
                                                className={s.color_input}
                                                value={fontColor}
                                                onChange={( e ) => setFontColor ( e.target.value )}
                                            />
                                        </div>
                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>Цвет при Hover кнопки</div>
                                    <div className={s.glob_input_inner}>
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
                                                onChange={( e ) => setButtonHoverColor ( e.target.value )}
                                            />
                                        </div>
                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
                                    </div>
                                </div>


                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>Цвет обводки на блоках</div>
                                    <div className={s.glob_input_inner}>
                                        <AdminInput
                                            placeholder={"Цвет обводки на блоках"}
                                            type={"text"}
                                            value={blockBorderColor}
                                            setInputValue={setBlockBorderColor}
                                        />
                                        <div className={s.color_holder}>
                                            <input
                                                type="color"
                                                className={s.color_input}
                                                value={blockBorderColor}
                                                onChange={( e ) => setBlockBorderColor ( e.target.value )}
                                            />
                                        </div>
                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.colorpicker_row}>
                                    <div className={s.glob_input_wrap}>Цвет обводки на в тултипе</div>
                                    <div className={s.glob_input_inner}>
                                        <AdminInput
                                            placeholder={"Цвет обводки на в тултипе"}
                                            type={"text"}
                                            value={tooltipBorderColor}
                                            setInputValue={setTooltipBorderColor}
                                        />
                                        <div className={s.color_holder}>
                                            <input
                                                type="color"
                                                className={s.color_input}
                                                value={tooltipBorderColor}
                                                onChange={( e ) => setTooltipBorderColor ( e.target.value )}
                                            />
                                        </div>
                                        <div className={s.main_btn} onClick={onClickHandler}>
                                            <Button text={"Изменить"}/>
                                        </div>
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
                                <div className={s.column_titleSite}>Загрузить Логотип</div>
                                <div className={s.colorpicker_row}>
                                    <AdminInput
                                        placeholder={"Ссылка на логотип сайта"}
                                        type={"text"}
                                        value={siteLogo}
                                        setInputValue={setSiteLogo}
                                    />
                                    <div className={s.main_btn} onClick={onClickHandler}>
                                        <Button text={"Изменить"}/>
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
