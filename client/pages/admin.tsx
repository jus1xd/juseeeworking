import React, {useEffect, useState} from "react";
import AdminInput from "../components/Admin/Input/Input";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import s from "../styles/Admin.module.css";
import {IAdminData} from "../types/admin";
import {useAppDispatch, useAppSelector} from "../hooks/useTypedSelector";
import {adminLogin} from "../store/thunks/adminThunk";
import {useRouter} from "next/router";
import {getSiteConfig} from "../store/thunks/condifigThunk";

const Admin: React.FC = ( {} ): JSX.Element => {
    const dispatch = useAppDispatch ()
    useEffect ( () => {
        dispatch ( getSiteConfig () )
    }, [] )
    const [username, setUsername] = useState<string> ( '' )
    const [password, setPassword] = useState<string> ( '' )
    const adminData: IAdminData = {
        username: username,
        password: password
    }
    const router = useRouter ()
    const errors = useAppSelector ( state => state.adminSlice.error )
    const adminUsername = useAppSelector ( state => state.adminSlice.username )
    useEffect ( () => {
        if (adminUsername !== '') {
            router.push ( '/admin/create' )
        }
    }, [adminUsername] );

    const onAdminSubmit = () => {
        if (username != '' && password != '') {
            dispatch ( adminLogin ( adminData ) )
        }
    }
    return (
        <>
            <Header/>
            <div className={s.login_wrapper}>
                <div className={s.container}>
                    <div className={s.log_inner}>
                        <div className={s.login_title}>Admin Panel</div>
                        <div className={s.inputs_container}>
                            <AdminInput placeholder={"Login"} type={"text"} value={username}
                                        setInputValue={setUsername}/>
                            <AdminInput placeholder={"Password"} type={"password"} value={password}
                                        setInputValue={setPassword}/>
                        </div>
                        <div className={s.main_btn} onClick={onAdminSubmit}>Log in</div>
                        {errors && <div className={s.error_message}>Invalid login or password</div>}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Admin;
