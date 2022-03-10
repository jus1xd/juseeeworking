import React from "react";
import s from "./Nav.module.css";

// import enFlag from "../public/img/enFlag.svg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Nav: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.nav_inner}>
            <div className={s.main_nav_button}>Choose category</div>
            <div className={s.nav_button}>Home Page</div>
            <Link href="/help">
              <a className={s.nav_button}>Help</a>
            </Link>
            <Link href="/terms">
              <a className={s.nav_button}>ToF</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
