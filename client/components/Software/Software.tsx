// @ts-nocheck
import React, {useCallback, useRef, useState} from "react";
import s from "./Software.module.css";
import Image from "next/image";
import Comment from "./Comment/Comment";
import RootWrapper from "../RootWrapper/RootWrapper";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {addComment} from "../../store/thunks/productThunk";
import Button from "../Button/Button";
import arrow from '../../public/img/icons/arrow-21-32.png'

const Software = ( {id} ) => {
    const product = useAppSelector ( ( state ) =>
        state.productsSlice.products.find ( ( item ) => item._id == id )
    );
    const sliderContent = useRef ( null );
    let [curPosition, setCurPosition] = useState<number> ( 0 );
    const [textComment, setTextComment] = useState<string> ( "" );
    const [isEmpty, setIsEmpty] = useState<boolean> ( false );
    const sliderHandler = () => {
        setCurPosition ( ( curPosition -= 412 ) );
        sliderContent.current.style.transform = `translateX(${curPosition}px)`;
        if (Math.abs ( curPosition ) >= sliderContent.current!.scrollWidth - 412) {
            setCurPosition ( 412 );
        }
    };
    const getActiveUrl = useCallback ( (title: string) => {
        const regExp = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/;
        if (title.match(regExp)) {
            const url = title!.match(regExp)![0];
            const link = `<a href=${url}>${url}</a>`;
            return title.replace(url, link);
        } else return title;
    }, []);
    const borderColor = useAppSelector ( state => state.configSlice.config.colors.blockBorderColor )
    const styles = {
        border: `1px solid ${borderColor}`,
    };
    const dispatch = useAppDispatch ();
    const username = useAppSelector ( ( state ) => state.adminSlice.username );
    const generateUsername = ( min, max ) => {
        let rand = min - 0.5 + Math.random () * ( max - min + 1 );
        return Math.round ( rand );
    };
    const user = {
        username: `${username ? `Admin` : `Username ${generateUsername ( 1, 1000 )}`}`,
        text: textComment,
    };
    const onSubmitHandler = () => {
        if (textComment != "") {
            dispatch ( addComment ( {user, id: product._id} ) );
        } else {
            setIsEmpty ( true );
        }

    };
    return (
        <>
            {product &&
                <RootWrapper appBg>
                    <div className={s.soft_wrapper}>
                        <div className={s.soft_info}>
                            <div className={s.container}>
                                <div className={s.info_inner}>
                                    <div className={s.soft_photo}>
                                        <img
                                            src={product.productPhoto}
                                            width={165}
                                            height={165}
                                            alt={"productPhoto"}
                                        />
                                        <div className={s.btn_wrapper}>
                                            <Button href={product.downloadLink} text="Download"/>
                                        </div>
                                    </div>
                                    <div className={s.soft_content}>
                                        <div className={s.soft_title}>{product.title}</div>
                                        <div className={s.soft_text}
                                             dangerouslySetInnerHTML={{__html: getActiveUrl(product.description).replace ( new RegExp ( '\r?\n', 'g' ), '<br />' )}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.slider}>
                            <div className={s.container}>
                                <div className={s.slider_inner}>
                                    <div className={`${s.slider_arrow} ${s.left_arrow}`} onClick={sliderHandler}>
                                        <RootWrapper btnColor btnHoverColor br={'10px'}>
                                            <div className={s.arrowBlock}>
                                                <Image
                                                    src={arrow}
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                        </RootWrapper>
                                    </div>
                                    <div
                                        className={`${s.slider_arrow} ${s.right_arrow}`}
                                        onClick={sliderHandler}
                                    >
                                        <RootWrapper btnColor btnHoverColor br={'10px'}>
                                            <div className={s.arrowBlock}>
                                                <Image
                                                    src={arrow}
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                        </RootWrapper>
                                    </div>
                                    <div className={s.track}>
                                        <div className={s.slider_content} ref={sliderContent}>
                                            <div className={s.image_container}>
                                                <img
                                                    src={product.previewPicture.firstPicture}
                                                    width={412}
                                                    height={265}
                                                />
                                            </div>
                                            <div className={s.image_container}>
                                                <img
                                                    src={product.previewPicture.secondPicture}
                                                    width={412}
                                                    height={265}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.wrapper}>
                            <div className={s.container}>
                                <div className={s.inner} style={styles}>
                                    <RootWrapper blockBg>
                                        <div className={s.inner_title}>General Details</div>
                                    </RootWrapper>
                                    <ul className={s.details_container}>
                                        <li className={s.detail_item}>
                                            File Format: {product.fileFormat}
                                        </li>
                                        <li className={s.detail_item}>
                                            File Size: {product.fileSize} GB
                                        </li>
                                        <li className={s.detail_item}>
                                            Download Source: {product.downloadSource}
                                        </li>
                                        <li className={s.detail_item}>
                                            Unlock Password: {product.unlockPassword}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={s.wrapper}>
                            <div className={s.container}>
                                <div className={s.inner} style={styles}>
                                    <RootWrapper blockBg>
                                        <div className={s.inner_title}>How to install</div>
                                    </RootWrapper>
                                    <ol className={s.details_container}>
                                        <li className={s.detail_item}>
                                            {" "}
                                            <a href= {product.howToInstall.stepOne}>
                                                {product.howToInstall.stepOne}
                                            </a>

                                        </li>
                                        <li className={s.detail_item}>
                                            {" "}
                                            <a href={product.howToInstall.stepTwo}>
                                                {product.howToInstall.stepTwo}
                                            </a>
                                        </li>
                                        <li className={s.detail_item}>
                                            <a href= {product.howToInstall.stepThree}>
                                                {product.howToInstall.stepThree}
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className={s.wrapper}>
                            <div className={s.container}>
                                <div className={s.inner} style={styles}>
                                    <RootWrapper blockBg>
                                        <div className={s.inner_title}>Download links</div>
                                    </RootWrapper>
                                    <div className={s.download_section}>
                                        <ol className={s.details_container}>
                                            <li className={s.detail_item}>
                                                Mirror link:
                                                <a className={s.aTag} href={product.downloadLinks.secondLink}>
                                                    {product.downloadLinks.secondLink}
                                                </a>
                                            </li>
                                            <li className={s.detail_item}>
                                                Mirror link:
                                                <a className={s.aTag} href={product.downloadLinks.secondLink}>
                                                    {product.downloadLinks.secondLink}
                                                </a>
                                            </li>
                                        </ol>
                                        <div className={s.btn_wrapper_b}>
                                            <Button href={product.downloadLink} g text="Download"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.wrapper}>
                            <div className={s.container}>
                                {
                                    <div className={`${s.inner} ${s.comments}`} style={styles}>
                                        <RootWrapper blockBg>
                                            <div className={s.inner_title}>Comments</div>
                                        </RootWrapper>
                                        <div className={s.comments_section}>
                                            {product.comments.length != 0
                                                ? product.comments.map ( ( comment, idx ) => (
                                                    <Comment
                                                        key={idx}
                                                        commentText={comment.text}
                                                        author={comment.username}
                                                        setState={setIsEmpty}
                                                        id={id}
                                                    />
                                                ) )
                                                : ""}
                                        </div>
                                        <div className={s.submit_area}>
                                            <input
                                                value={textComment}
                                                onChange={( e ) => setTextComment ( e.target.value )}
                                                type="text"
                                                style={styles}
                                                className={s.comment_input}
                                                placeholder="Type comment..."
                                            />
                                            <div className={s.btn_wrapper_c} onClick={onSubmitHandler}>
                                                <Button text="Submit"/>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {isEmpty && <div className={s.error}>Заполните поле</div>}
                            </div>
                        </div>
                    </div>
                </RootWrapper>
            }
        </>
    );
};

export default Software;
