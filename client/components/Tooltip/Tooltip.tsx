import Link from "next/link";
import React, {Dispatch, SetStateAction} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import s from "./Tooltip.module.css";
import {getByCategory} from "../../store/thunks/productThunk";
import {useRouter} from "next/router";
import RootWrapper from "../RootWrapper/RootWrapper";

type TProps = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
};

const Tooltip: React.FC<TProps> = ( {active, setActive} ): JSX.Element => {
    const categories = useAppSelector ( ( state ) => state.configSlice.config.categories );
    const router = useRouter ();
    const dispatch = useAppDispatch ();
    const onClickHandler = async ( el: any ) => {
        setActive ( false );
        await dispatch ( getByCategory ( el ) ).then ( () => router.push ( "/" ) )
    };
    const tooltipBorderColor = useAppSelector ( state => state.configSlice.config.colors.tooltipBorderColor )
    const styles = {
        borderBottom: `1px solid ${tooltipBorderColor}`,
    };
    return (
        <div
            className={active ? `${s.main_wrapper} ${s.active}` : s.main_wrapper}
            onMouseLeave={() => setActive ( false )}
        >
            <div className={s.wrapper}
                 onMouseOver={() => setActive ( true )}
                 onMouseLeave={() => setActive ( false )}>
                <RootWrapper blockBg br={'10px'}>
                    <div className={s.inner}>
                        {categories &&
                            categories.map ( ( el, idx ) => (
                                <Link href="" key={idx}>
                                    <a className={s.nav_link} style={styles} onClick={() => onClickHandler ( el )}>
                                        {el}
                                    </a>
                                </Link>
                            ) )}
                    </div>
                </RootWrapper>
            </div>
        </div>
    );
}

export default Tooltip;
