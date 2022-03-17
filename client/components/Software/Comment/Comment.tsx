import React, {Dispatch, SetStateAction, useState} from "react";
import s from "./Comment.module.css";
import Image from "next/image";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import {deleteComment} from "../../../store/thunks/productThunk";

interface ICommentProps {
    commentText: string
    author: string
    id: string
}

const Comment = ( {commentText, author, id}: ICommentProps ): JSX.Element => {
    const username = useAppSelector ( state => state.adminSlice.username )
    const dispatch = useAppDispatch ()
    const onDeleteHandler = () => {
            dispatch ( deleteComment ( {comment: {username: author, text: commentText}, username, id} ) )
    }
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.comment_item}>
                    <div className={s.author}>
                        <div className={s.author_avatar}>
                            <Image src="/img/icons/Software/avatar.svg" width={40} height={40}/>
                        </div>
                        <div className={author == 'Admin' ? s.author_name_admin : s.author_name}>{author}</div>
                    </div>
                    <div className={s.comment_text}>
                        {commentText}
                    </div>
                </div>
                {author === 'Admin' && <div className={s.btnDel} onClick={onDeleteHandler}/>}
            </div>
        </>
    );
};

export default Comment;
