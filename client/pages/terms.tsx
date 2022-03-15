import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import RootWrapper from "../components/RootWrapper/RootWrapper";
import s from "../styles/Help.module.css";

const Terms: React.FC = ({}): JSX.Element => {
  return (
    <RootWrapper appBg>
      <Header />
      <Nav />
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.help_inner}>
            <div className={s.help_title}>Terms Of Service</div>
            <div className={s.help_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              venenatis convallis amet eu et ipsum. Ac, donec viverra tristique
              elit euismod molestie uismod egestas egestas. Sollicitudin sed
              adipiscing eu, ipsum purus et etiam mauris tristique. Consectetur
              id pretium semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Id venenatis convallis amet eu et ipsum. Ac,
              donec viverra tristique elit euismod molestie uismod egestas Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Id venenatis
              convallis amet eu et ipsum. Ac, donec viverra tristique elit
              euismod molestie uismod egestas egestas. Sollicitudin sed
              adipiscing eu, ipsum purus et etiam mauris tristique. Consectetur
              id pretium semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Id venenatis convallis amet eu et ipsum. Ac,
              donec viverra tristique elit euismod molestie uismod egestas Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Id venenatis
              convallis amet eu et ipsum. Ac, donec viverra tristique elit
              euismod molestie uismod egestas egestas. Sollicitudin sed
              adipiscing eu, ipsum purus et etiam mauris tristique. Consectetur
              id pretium semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Id venenatis convallis amet eu et ipsum. Ac,
              donec viverra tristique elit euismod molestie uismod egestas
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </RootWrapper>
  );
};

export default Terms;
