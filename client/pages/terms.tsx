import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import RootWrapper from "../components/RootWrapper/RootWrapper";
import s from "../styles/Help.module.css";
import { useAppSelector } from "../hooks/useTypedSelector";
import GlobalWrapper from "../components/GlobalWrapper/GlobalWrapper";

const Terms: React.FC = ({}): JSX.Element => {
  const config = useAppSelector((state) => state.configSlice.config);
  return (
    <GlobalWrapper>
      <RootWrapper appBg>
        <Header />
        <Nav />
        <div className={s.wrapper}>
          <div className={s.container}>
            <div className={s.help_inner}>
              <div className={s.help_title}>{config.tof.tofTitle}</div>
              <div className={s.help_text}>{config.tof.description}</div>
            </div>
          </div>
        </div>
        <Footer />
      </RootWrapper>
    </GlobalWrapper>
  );
};

export default Terms;
