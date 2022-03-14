import React, {Dispatch, SetStateAction} from "react";
import s from "./Input.module.css";

type TProps = {
    placeholder: string;
    type: string;
    size?: string;
    value: string,
    setInputValue: Dispatch<SetStateAction<string>>
};

const AdminInput: React.FC<TProps> = ( {placeholder, type, size, value, setInputValue} ): JSX.Element => {
    const onInputChangeHandler = ( e: any ) => {
        setInputValue ( e.target.value )
    }
    return (
        <div className={s.wrapper}>
            <input
                type={type}
                placeholder={placeholder}
                className={size === "long" ? `${s.admin_input} ${s.long_input}` : s.admin_input}
                value={value}
                required
                onChange={onInputChangeHandler}
            />
        </div>
    );
};

export default AdminInput;
