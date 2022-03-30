import type {NextPage} from "next";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import SoftCard from "../components/SoftCard/SoftCard";
import s from "../styles/Home.module.css";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/useTypedSelector";
import {getSiteConfig} from "../store/thunks/configThunk";
import {getAllProducts} from "../store/thunks/productThunk";
import RootWrapper from "../components/RootWrapper/RootWrapper";
import {deleteSorted} from "../store/slices/productsSlice";
import GlobalWrapper from "../components/GlobalWrapper/GlobalWrapper";
import {useHistory} from "../hooks/historyProvider";

const Home: NextPage = () => {
    const products = useAppSelector ( state => state.productsSlice.products );
    const sortedProducts = useAppSelector ( state => state.productsSlice.sortedProducts );
    const config = useAppSelector ( state => state.configSlice.config );
    const searchString = useAppSelector(state => state.productsSlice.searchString)
    const dispatch = useAppDispatch ();
    const {history} = useHistory ()
    useEffect ( () => {
        dispatch ( getSiteConfig () )
        dispatch ( getAllProducts () )
        if (history[history.length - 2] == '/help' || history[history.length - 2] == '/terms' || history[history.length - 1] == '/') dispatch ( deleteSorted () )
    }, [] );
    return (
        <>
            {Object.keys ( config ).length !== 0 && (
                <GlobalWrapper>
                    <RootWrapper appBg>
                        <div className={s.wrapper}>
                            <Header/>
                            <Nav/>
                            <div className={s.soft_cards}>
                                {sortedProducts.length !== 0
                                    ? sortedProducts.filter ( item => item?.title?.toLowerCase ().includes ( searchString.toLowerCase () ) ).map ( ( product, idx ) => (
                                        <SoftCard
                                            key={idx}
                                            id={product._id}
                                            title={product.title}
                                            categories={product.categories}
                                            description={product.description}
                                            productPhoto={product.productPhoto}
                                        />
                                    ) )
                                    : products.filter ( item => item?.title?.toLowerCase ().includes ( searchString.toLowerCase () ) ).map ( ( product, idx ) => (
                                        <SoftCard
                                            key={idx}
                                            id={product._id}
                                            title={product.title}
                                            categories={product.categories}
                                            description={product.description}
                                            productPhoto={product.productPhoto}
                                        />
                                    ) )}
                                <div className={s.totop_btn}>
                                    <Image
                                        src="/img/icons/Home/totop.svg"
                                        height={45}
                                        width={45}
                                        onClick={() =>
                                            window.scrollTo ( {top: 0, behavior: "smooth"} )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </RootWrapper>
                </GlobalWrapper>
            )}
        </>
    );
};

export default Home;
