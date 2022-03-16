import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/header";
import Software from "../../components/Software/Software";
import s from "../../styles/Software.module.css";
import { getProduct } from "../../store/thunks/productThunk";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";

const SoftwarePage: React.FC = ({}): JSX.Element => {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const product = useAppSelector((state) => state.productsSlice.product);
  return (
    <div>
      <Header />
      <div className={s.content_wrapper}>
        {Object.keys(product).length != 0 ? <Software product={product} /> : ""}
      </div>
      <div className={s.totop_btn}>
        <Image
          src="/img/icons/Home/totop.svg"
          height={45}
          width={45}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
      <Footer />
    </div>
  );
};

export default SoftwarePage;
