import React from "react";
import s from "./Footer.module.css";

// import enFlag from "../public/img/enFlag.svg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import RootWrapper from "../RootWrapper/RootWrapper";
import {useAppSelector} from "../../hooks/useTypedSelector";

const Footer: React.FC = ( {} ): JSX.Element => {
    const siteLogo = useAppSelector ( state => state.configSlice.config.siteLogo )
    return (
        <>
            <RootWrapper headerBg>
                <footer className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.inner}>
                            <Link href="/">
                                <img src={siteLogo} alt={''} className={s.logo}/>
                            </Link>
                            <div className={s.footer_nav}>
                                <Link href="/terms">
                                    <a className={s.foot_nav_item}>Terms Of Service</a>
                                </Link>
                                <Link href="/help">
                                    <a className={s.foot_nav_item}>Help</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </RootWrapper>
        </>
    );
};

export default Footer;
