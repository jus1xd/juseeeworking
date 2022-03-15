import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import SoftCard from "../components/SoftCard/SoftCard";
import s from "../styles/Home.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getSiteConfig } from "../store/thunks/condifigThunk";
import { getAllProducts } from "../store/thunks/productThunk";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSiteConfig());
    dispatch(getAllProducts());
  }, []);
  const products = useAppSelector((state) => state.productsSlice.products);
  return (
    <>
      <div className={s.wrapper}>
        <Header />
        <Nav />
        <div className={s.soft_cards}>
          {products.map((product) => (
            <SoftCard
              key={product.productPhoto}
              id={product._id}
              title={product.title}
              categories={product.categories}
              description={product.description}
              productPhoto={product.productPhoto}
            />
          ))}
          <div className={s.totop_btn}>
            <Image
              src="/img/icons/Home/totop.svg"
              height={45}
              width={45}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
