import React from "react";
import AdminInput from "../components/Admin/Input/Input";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import s from "../styles/Admin.module.css";

const Admin: React.FC = ({}): JSX.Element => {
  return (
    <>
      <Header />
      <div className={s.login_wrapper}>
        <div className={s.container}>
          <div className={s.log_inner}>
            <div className={s.login_title}>Admin Panel</div>
            <div className={s.inputs_container}>
              <AdminInput placeholder={"Login"} type={"text"} />
              <AdminInput placeholder={"Password"} type={"password"} />
            </div>
            <div className={s.main_btn}>Log in</div>
            <div className={s.error_message}>Invalid login or password</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
