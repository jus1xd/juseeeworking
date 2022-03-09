import React from "react";
import s from "./Input.module.css";

type TProps = {
  placeholder: string;
  type: string;
  size?: string;
};

const AdminInput: React.FC<TProps> = ({
  placeholder,
  type,
  size,
}): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <input 
      type={type} 
      placeholder={placeholder} 
      className={size === "long" ? `${s.admin_input} ${s.long_input}` : s.admin_input}/>
    </div>
  );
};

export default AdminInput;
