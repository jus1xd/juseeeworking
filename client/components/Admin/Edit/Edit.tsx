import React, {useState} from "react";
import s from "./Edit.module.css";

import AdminInput from "../Input/Input";
import {IProduct} from "../../../types/products";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import {addProduct, updateProduct} from "../../../store/thunks/productThunk";

const Edit: React.FC = ( {} ): JSX.Element => {
    const product = useAppSelector ( state => state.productsSlice.product )
    const username = useAppSelector ( state => state.adminSlice.username )
    const [title, setTitle] = useState<string> ( product.title );
    const [productPhoto, serProductPhoto] = useState<string> ( product.productPhoto );
    const [description, setDescription] = useState<string> ( product.description );
    const [previewPictureFirst, setPreviewPictureFirst] = useState<string> ( product.previewPicture.firstPicture );
    const [previewPictureSecond, setPreviewPictureSecond] = useState<string> ( product.previewPicture.secondPicture );
    const [fileFormat, setFileFormat] = useState<string> ( product.fileFormat );
    const [fileSize, setFileSize] = useState<string> ( product.fileSize );
    const [downloadSource, setDownloadSource] = useState<string> ( product.downloadSource )
    const [unlockPassword, setUnlockPassword] = useState<string> ( product.unlockPassword );
    const [downloadLinksFirst, setDownloadLinksFirst] = useState<string> ( product.downloadLinks.firstLink );
    const [downloadLinksSecond, setDownloadLinksSecond] = useState<string> ( product.downloadLinks.secondLink );
    const [howToInstallFirst, setHowToInstallFirst] = useState<string> ( product.howToInstall.stepOne );
    const [howToInstallSecond, setHowToInstallSecond] = useState<string> ( product.howToInstall.stepTwo );
    const [howToInstallThird, setHowToInstallThird] = useState<string> ( product.howToInstall.stepThree );
    const [categories, setCategories] = useState<string> ( product.categories.join () );
    const productToUpdate: IProduct = {
        title,
        productPhoto,
        description,
        previewPicture: {
            firstPicture: previewPictureFirst,
            secondPicture: previewPictureSecond,
        },
        fileFormat,
        fileSize,
        downloadSource,
        unlockPassword,
        downloadLinks: {
            firstLink: downloadLinksFirst,
            secondLink: downloadLinksSecond,
        },
        howToInstall: {
            stepOne: howToInstallFirst,
            stepTwo: howToInstallSecond,
            stepThree: howToInstallThird,
        },
        categories: categories.split ( ',' ),
        _id: product._id
    }
    const dispatch = useAppDispatch ()
    const onEditHandler = () => {
        if (Object.values ( productToUpdate ).every ( item => item.length != 0 )) {
            dispatch ( updateProduct ( {productToUpdate, username} ) )
        }
    }
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.inner}>
                        <div className={s.inner_title}>Admin Panel - Редактирование страницы</div>
                        <div className={s.columns_container}>
                            <div className={s.column}>
                                <div className={s.column_title}>Edit page</div>
                                <AdminInput placeholder={"Титул страницы"} type={"text"} value={title}
                                            setInputValue={setTitle}/>
                                <AdminInput
                                    placeholder={"Ссылка на фото превью"}
                                    type={"text"}
                                    value={productPhoto}
                                    setInputValue={serProductPhoto}
                                />
                                <AdminInput
                                    placeholder={"Описание софта"}
                                    type={"text"}
                                    size={"long"}
                                    value={description}
                                    setInputValue={setDescription}
                                />
                                <AdminInput
                                    placeholder={"Ссылка на первое фото слайдера"}
                                    type={"text"}
                                    value={previewPictureFirst}
                                    setInputValue={setPreviewPictureFirst}
                                />
                                <AdminInput
                                    placeholder={"Ссылка на второе фото слайдера"}
                                    type={"text"}
                                    value={previewPictureSecond}
                                    setInputValue={setPreviewPictureSecond}
                                />
                            </div>
                            <div className={s.column}>
                                <div className={s.column_title}>General Details</div>
                                <AdminInput placeholder={"File Format"} type={"text"} value={fileFormat}
                                            setInputValue={setFileFormat}/>
                                <AdminInput placeholder={"File Size"} type={"text"} value={fileSize}
                                            setInputValue={setFileSize}/>
                                <AdminInput placeholder={"Download Source"} type={"text"} value={downloadSource}
                                            setInputValue={setDownloadSource}/>
                                <AdminInput placeholder={"Unlock Password"} type={"text"} value={unlockPassword}
                                            setInputValue={setUnlockPassword}/>
                                <div className={s.column}>
                                    <div className={s.column_title}>Download Links</div>
                                    <AdminInput placeholder={"Mirror link #1"} type={"text"} value={downloadLinksFirst}
                                                setInputValue={setDownloadLinksFirst}/>
                                    <AdminInput placeholder={"Mirror link #2"} type={"text"} value={downloadLinksSecond}
                                                setInputValue={setDownloadLinksSecond}/>
                                </div>
                            </div>
                            <div className={s.column}>
                                <div className={s.column_title}>How to install</div>
                                <AdminInput placeholder={"Step one"} type={"text"} value={howToInstallFirst}
                                            setInputValue={setHowToInstallFirst}/>
                                <AdminInput placeholder={"Step two"} type={"text"} value={howToInstallSecond}
                                            setInputValue={setHowToInstallSecond}/>
                                <AdminInput placeholder={"Step three"} type={"text"} value={howToInstallThird}
                                            setInputValue={setHowToInstallThird}/>
                                <div className={s.column}>
                                    <div className={s.column_title}>Category</div>
                                    <AdminInput placeholder={"Категории"}
                                                type={"text"}
                                                value={categories}
                                                setInputValue={setCategories}/>
                                </div>
                            </div>
                        </div>
                        <div className={s.btn_wrapper} onClick={onEditHandler}>
                            <div className={s.main_btn}>Редактировать страницу</div>
                        </div>
                        <div className={s.error_container}>
                            Не все поля заполнены, заполните поля
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
