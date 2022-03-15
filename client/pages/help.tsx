import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import s from "../styles/Help.module.css";
import {useAppSelector} from "../hooks/useTypedSelector";

const Help: React.FC = ({}): JSX.Element => {
  const config =  useAppSelector(state => state.configSlice.config)
  return (
    <>
      <Header />
      <Nav />
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.help_inner}>
            <div className={s.help_title}>{config.help.helpTitle}</div>
            <div className={s.help_text}>
              {config.help.firstBlock}
            </div>
            <div style={{margin: "44px 0px"}}><img src={config.help.imageLink} width={1200} height={215} alt={''}/></div>
            <div className={s.help_text}>
              {config.help.secondTextBlock}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Help;

