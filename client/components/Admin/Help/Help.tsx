import React, {useEffect, useState} from "react";
import s from "./Help.module.css";
import AdminInput from "../Input/Input";
import {
    useAppDispatch,
    useAppSelector,
} from "../../../hooks/useTypedSelector";
import {changeHelp} from "../../../store/slices/configSlice";
import {changeSiteConfig} from "../../../store/thunks/configThunk";
import RootWrapper from "../../RootWrapper/RootWrapper";

const Help: React.FC = ( {} ): JSX.Element => {
    const config = useAppSelector ( ( state ) => state.configSlice.config );
    const username = useAppSelector ( ( state ) => state.adminSlice.username );
    const [helpTitle, setHelpTitle] = useState<string> ( config.help.helpTitle );
    const [imageLink, setImageLink] = useState<string> ( config.help.imageLink );
    const [firstBlock, setFirstBlock] = useState<string> ( config.help.firstBlock );
    const [secondTextBlock, setSecondTextBlock] = useState<string> (
        config.help.secondTextBlock
    );
    const dispatch = useAppDispatch ();
    const [isEdit, setIsEdit] = useState<boolean> ( false );
    const [isEmpty, setIsEmpty] = useState<boolean> ( false );
    const onClickHandler = () => {
        if (
            Object.values ( {
                helpTitle,
                imageLink,
                firstBlock,
                secondTextBlock,
            } ).every ( ( item ) => item.length != 0 )) {
            dispatch ( changeHelp ( {helpTitle, imageLink, firstBlock, secondTextBlock} )
            );
            setIsEdit ( true );
            setIsEmpty ( false );
        } else {
            setIsEmpty ( true ), setIsEdit ( false );
        }
    };
    useEffect ( () => {
        dispatch ( changeSiteConfig ( {config, username} ) );
    }, [config] );
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.inner}>
                        <RootWrapper blockBg>
                            <div className={s.inner_title}>Admin Panel - Помощь</div>
                        </RootWrapper>
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
                            {isEdit && (
                                <div className={s.msg_container}>
                                    Блок помощи успешно изменён
                                </div>
                            )}
                            {isEmpty && (
                                <div className={s.msg_container_red}>Не все поля заполнены</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;
