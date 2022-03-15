import Image from "next/image";
import React from "react";
import s from "./PageItem.module.css";
import {useAppDispatch, useAppSelector} from "../../../../hooks/useTypedSelector";
import {deleteProduct} from "../../../../store/thunks/productThunk";
interface IPageProps {
    title: string,
    id: string
}

const PageItem: React.FC<IPageProps> = ( {title,id}: IPageProps ): JSX.Element => {
    const username = useAppSelector ( state => state.adminSlice.username )
    const dispatch = useAppDispatch ()
    const onDeleteHandler = () => {
        dispatch ( deleteProduct ( {id, username} ) )
    }
    return (
        <div className={s.wrapper}>
            <div className={s.page_item}>
                <div className={s.item_content}>
                    <Image src="/img/SoftCard/cardAvatar.png" width={60} height={60}/>
                    <div className={s.page_title}>
                        {title}
                    </div>
                </div>
                <div className={s.btns_container}>
                    <div className={s.main_btn}>Edit</div>
                    <div className={s.remove_btn} onClick={onDeleteHandler}>Remove</div>
                </div>
            </div>
        </div>
    );
};

export default PageItem;
