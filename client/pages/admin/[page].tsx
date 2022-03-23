import { useRouter } from "next/router";
import React from "react";
import AdminNav from "../../components/Admin/AdminNav/AdminNav";
import Appearance from "../../components/Admin/Appearance/Appearance";
import Category from "../../components/Admin/Category/Category";
import Create from "../../components/Admin/Create/Create";
import Edit from "../../components/Admin/Edit/Edit";
import Help from "../../components/Admin/Help/Help";
import Rules from "../../components/Admin/Rules/Rules";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/header";
import s from "../../styles/Admin.module.css";
import { useAppSelector } from "../../hooks/useTypedSelector";
import Admin from "../admin";
import RootWrapper from "../../components/RootWrapper/RootWrapper";
import GlobalWrapper from "../../components/GlobalWrapper/GlobalWrapper";

const Page: React.FC = ({}): JSX.Element => {
  const router = useRouter();
  const { page } = router.query;
  const username = useAppSelector((state) => state.adminSlice.username);
  return (
    <GlobalWrapper>
      <RootWrapper appBg>
        {username !== "" ? (
          <div>
            <Header />
            <AdminNav />
            <div className={s.content_wrapper}>
              {page === "edit" ? (
                <Edit />
              ) : page === "create" ? (
                <Create />
              ) : page === "category" ? (
                <Category />
              ) : page === "rules" ? (
                <Rules />
              ) : page === "help" ? (
                <Help />
              ) : page === "appearance" ? (
                <Appearance />
              ) : (
                ""
              )}
            </div>
            <Footer />
          </div>
        ) : (
          <Admin />
        )}
      </RootWrapper>
    </GlobalWrapper>
  );
};

export default Page;
