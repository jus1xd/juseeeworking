import React, {useState} from "react";
import s from "./Rules.module.css";
import AdminInput from "../Input/Input";
import {useAppDispatch} from "../../../hooks/useTypedSelector";
import {changeTof} from "../../../store/slices/configSlice";

const Rules: React.FC = ( {} ): JSX.Element => {
    const [tofTitle, setTofTitle] = useState<string> ( '' )
    const [description, setDescription] = useState<string> ( '' )
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        dispatch(changeTof({tofTitle, description}))
    }
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
                                <AdminInput placeholder={"Заголовок"} type={"text"} value={tofTitle}
                                            setInputValue={setTofTitle}/>
                            </div>
                            <textarea className={s.rules_text} value={description}
                                      onChange={e => setDescription ( e.target.value )}/>
                            <div className={s.btn_wrapper} onClick={onClickHandler}>
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
