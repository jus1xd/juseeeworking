import Link from "next/link";
import React from "react";
import RootWrapper from "../../RootWrapper/RootWrapper";
import s from "./AdminNav.module.css";
import {useAppDispatch} from "../../../hooks/useTypedSelector";
import {logout} from "../../../store/slices/adminSlice";
import {useRouter} from "next/router";

const AdminNav: React.FC = ({}): JSX.Element => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const onLogoutHandler = () => {
    dispatch(logout())
    router.push('/admin')
  }
  return (
    <RootWrapper underHeadColor>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <Link href="/admin/create">
              <div className={s.nav_item}>Страницы</div>
            </Link>
            <Link href="/admin/category">
              <div className={s.nav_item}>Категории</div>
            </Link>
            <Link href="/admin/rules">
              <div className={s.nav_item}>Правила</div>
            </Link>
            <Link href="/admin/appearance">
              <div className={s.nav_item}>Внешний вид</div>
            </Link>
            <Link href="/admin/help">
              <div className={s.nav_item}>Помощь</div>
            </Link>
            <Link href="/admin/logout">
              <div className={s.nav_item} style={{backgroundColor: "#ED4B4B90"}} onClick={onLogoutHandler }>Выйти</div>
            </Link>
          </div>
        </div>
      </div>
    </RootWrapper>
  );
};

export default AdminNav;
