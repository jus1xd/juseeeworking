import React, {useState} from "react";
import s from "./Nav.module.css";
import Link from "next/link";
import Tooltip from "../Tooltip/Tooltip";
import Button from "../Button/Button";
import {useAppDispatch} from "../../hooks/useTypedSelector";
import {getAllProducts} from "../../store/thunks/productThunk";

const Nav: React.FC = ( {} ): JSX.Element => {
    const [tooltipActive, setTooltipActive] = useState<boolean> ( false );
    const dispatch = useAppDispatch ()
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.nav_inner}>
                        <div
                            onMouseOver={() => {
                                setTooltipActive ( true )
                            }}
                            className={s.main_nav_button}
                        >
                            Choose category
                        </div>
                        <Link href="/">
                            <div className={s.nav_button} onClick={() => dispatch ( getAllProducts () )}>
                                <Button text={"Home Page"}/>
                            </div>
                        </Link>
                        <Link href="/help">
                            <div className={s.nav_button}>
                                <Button text={"Help"}/>
                            </div>
                        </Link>
                        <Link href="/terms">
                            <div className={s.nav_button}>
                                <Button text={"ToF"}/>
                            </div>
                        </Link>
                    </div>
                    <Tooltip setActive={setTooltipActive} active={tooltipActive}/>
                </div>
            </div>
        </>
    );
};

export default Nav;
