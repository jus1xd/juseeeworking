import Image from "next/image";
import React from "react";
import s from "./PageItem.module.css";
import {
    useAppDispatch,
    useAppSelector,
} from "../../../../hooks/useTypedSelector";
import {
    deleteProduct,
    getProduct,
} from "../../../../store/thunks/productThunk";
import {useRouter} from "next/router";
import Button from "../../../Button/Button";

interface IPageProps {
    title: string,
    id?: string
    src: string
}

const PageItem: React.FC<IPageProps> = ( {
                                             title,
                                             id,
                                             src,
                                         }: IPageProps ): JSX.Element => {
    const username = useAppSelector ( ( state ) => state.adminSlice.username );
    const dispatch = useAppDispatch ();
    const router = useRouter ();
    const onDeleteHandler = () => {
        dispatch ( deleteProduct ( {id, username} ) );
    };
    const product = useAppSelector ( ( state ) => state.productsSlice.product );
    const onEditHandler = async () => {
        await dispatch ( getProduct ( id ) ).then ( () => {
            if (Object.keys ( product ).length !== 0) {
                router.push ( "edit" );
            }
        } );
    };
    const borderColor = useAppSelector ( state => state.configSlice.config.colors.blockBorderColor )
    const styles = {
        border: `1px solid ${borderColor}`,
    };
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.page_item} style={styles}>
                    <div className={s.item_content}>
                        <img src={src} width={60} height={60}/>
                        <div className={s.page_title}>{title}</div>
                    </div>
                    <div className={s.btns_container}>
                        <div className={s.main_btn} onClick={onEditHandler}>
                            <Button text="Изменить"/>
                        </div>
                        <div className={s.remove_btn} onClick={onDeleteHandler}>
                            Remove
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageItem;
