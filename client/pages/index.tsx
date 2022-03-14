import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import SoftCard from "../components/SoftCard/SoftCard";
import s from "../styles/Home.module.css";
import {useEffect} from "react";
import {useAppDispatch} from "../hooks/useTypedSelector";
import {getSiteConfig} from "../store/thunks/configThunk";

const Home: NextPage = () => {
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(getSiteConfig())
    } , [])
  return (
    <div className={s.wrapper}>
      <Header />
      <Nav />
      <div className={s.soft_cards}>
        <SoftCard />
        <SoftCard /> 
        <SoftCard />
        <SoftCard />
        <div className={s.totop_btn}>
          <Image
            src="/img/icons/Home/totop.svg"
            height={45}
            width={45}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
