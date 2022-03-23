import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import SoftCard from "../components/SoftCard/SoftCard";
import s from "../styles/Home.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getSiteConfig } from "../store/thunks/configThunk";
import { getAllProducts } from "../store/thunks/productThunk";
import RootWrapper from "../components/RootWrapper/RootWrapper";
import { deleteSorted } from "../store/slices/productsSlice";
import GlobalWrapper from "../components/GlobalWrapper/GlobalWrapper";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSiteConfig());
    dispatch(getAllProducts());
    dispatch(deleteSorted());
  }, []);
  const products = useAppSelector((state) => state.productsSlice.products);
  const sortedProducts = useAppSelector(
    (state) => state.productsSlice.sortedProducts
  );
  const config = useAppSelector((state) => state.configSlice.config);
  return (
    <>
      {Object.keys(config).length !== 0 && (
        <GlobalWrapper>
          <RootWrapper appBg>
            <div className={s.wrapper}>
              <Header />
              <Nav />
              <div className={s.soft_cards}>
                {sortedProducts.length != 0
                  ? sortedProducts.map((product, idx) => (
                      <SoftCard
                        key={idx}
                        id={product._id}
                        title={product.title}
                        categories={product.categories}
                        description={product.description}
                        productPhoto={product.productPhoto}
                      />
                    ))
                  : products.map((product, idx) => (
                      <SoftCard
                        key={idx}
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
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                </div>
              </div>
            </div>
            <Footer />
          </RootWrapper>
        </GlobalWrapper>
      )}
    </>
  );
};

export default Home;
