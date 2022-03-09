import React from "react";
import s from "./Nav.module.css";

// import enFlag from "../public/img/enFlag.svg";
import Image from "next/image";
import Head from "next/head";

const Nav: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.nav_inner}>
            <div className={s.main_nav_button}>Choose category</div>
            <div className={s.nav_button}>Home Page</div>
            <div className={s.nav_button}>Help</div>
            <div className={s.nav_button}>ToF</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
