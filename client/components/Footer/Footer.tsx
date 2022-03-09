import React from "react";
import s from "./Footer.module.css";

// import enFlag from "../public/img/enFlag.svg";
import Image from "next/image";
import Head from "next/head";

const Footer: React.FC = ({}): JSX.Element => {
  return (
    <>
      <footer className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.logo}>Software Logo</div>
            <div className={s.footer_nav}>
              <div className={s.foot_nav_item}>Terms Of Service</div>
              <div className={s.foot_nav_item}>Agreement</div>
              <div className={s.foot_nav_item}>Help</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
