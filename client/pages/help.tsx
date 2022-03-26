import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import RootWrapper from "../components/RootWrapper/RootWrapper";
import s from "../styles/Help.module.css";
import {useAppSelector} from "../hooks/useTypedSelector";
import GlobalWrapper from "../components/GlobalWrapper/GlobalWrapper";

const Help: React.FC = ( {} ): JSX.Element => {
    const config = useAppSelector ( ( state ) => state.configSlice.config );
    return (
        <GlobalWrapper>
            <RootWrapper appBg>
                <Header/>
                <Nav/>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.help_inner}>
                            <div className={s.help_title}>{config.help.helpTitle}</div>
                            <div
                                dangerouslySetInnerHTML={{__html: config.help.firstBlock.replace ( new RegExp ( '\r?\n', 'g' ), '<br />' )}}
                                className={s.help_text}/>
                            <div style={{margin: "44px 0px"}}>
                                <img
                                    src={config.help.imageLink}
                                    width={1200}
                                    height={215}
                                    alt={""}
                                />
                            </div>
                            <div
                                dangerouslySetInnerHTML={{__html: config.help.secondTextBlock.replace ( new RegExp ( '\r?\n', 'g' ), '<br />' )}}
                                className={s.help_text}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </RootWrapper>
        </GlobalWrapper>
    );
};

export default Help;
