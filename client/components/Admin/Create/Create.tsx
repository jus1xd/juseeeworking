import React, {useState} from "react";
import s from "./Create.module.css";
import AdminInput from "../Input/Input";
import PageItem from "./PageItem/PageItem";
import {IProduct} from "../../../types/products";
import {
    useAppDispatch,
    useAppSelector,
} from "../../../hooks/useTypedSelector";
import {addProduct} from "../../../store/thunks/productThunk";
import RootWrapper from "../../RootWrapper/RootWrapper";
import Button from "../../Button/Button";

const Create: React.FC = ( {} ): JSX.Element => {
    const [title, setTitle] = useState<string> ( "" );
    const [productPhoto, serProductPhoto] = useState<string> ( "" );
    const [description, setDescription] = useState<string> ( "" );
    const [previewPictureFirst, setPreviewPictureFirst] = useState<string> ( "" );
    const [previewPictureSecond, setPreviewPictureSecond] = useState<string> ( "" );
    const [fileFormat, setFileFormat] = useState<string> ( "" );
    const [fileSize, setFileSize] = useState<string> ( "" );
    const [downloadSource, setDownloadSource] = useState<string> ( "" );
    const [unlockPassword, setUnlockPassword] = useState<string> ( "" );
    const [downloadLinksFirst, setDownloadLinksFirst] = useState<string> ( "" );
    const [downloadLinksSecond, setDownloadLinksSecond] = useState<string> ( "" );
    const [howToInstallFirst, setHowToInstallFirst] = useState<string> ( "" );
    const [howToInstallSecond, setHowToInstallSecond] = useState<string> ( "" );
    const [howToInstallThird, setHowToInstallThird] = useState<string> ( "" );
    const [downloadLink, setDownloadLink] = useState<string> ( "" );
    const [categories, setCategories] = useState<string> ( "" );
    const [isEmpty, setIsEmpty] = useState<boolean> ( false );
    const productToCreate: IProduct = {
        title: title.trim (),
        productPhoto: productPhoto.trim (),
        description: description.trim (),
        previewPicture: {
            firstPicture: previewPictureFirst.trim (),
            secondPicture: previewPictureSecond.trim (),
        },
        fileFormat: fileFormat.trim (),
        fileSize: fileSize.trim (),
        downloadSource: downloadSource.trim (),
        unlockPassword: unlockPassword.trim (),
        downloadLinks: {
            firstLink: downloadLinksFirst.trim (),
            secondLink: downloadLinksSecond.trim (),
        },
        downloadLink: downloadLink.trim (),
        howToInstall: {
            stepOne: howToInstallFirst.trim (),
            stepTwo: howToInstallSecond.trim (),
            stepThree: howToInstallThird.trim (),
        },
        categories: categories.trim ().split ( "," ),
    };
    const borderColor = useAppSelector ( state => state.configSlice.config.colors.blockBorderColor )
    const styles = {
        border: `1px solid ${borderColor}`,
    };
    const dispatch = useAppDispatch ();
    const username = useAppSelector ( ( state ) => state.adminSlice.username );
    const onSubmitHandler = () => {
        if (Object.values ( productToCreate ).every ( ( item ) => item.length != 0 )) {
            dispatch ( addProduct ( {productToCreate, username} ) );
            setIsEmpty ( false );
        } else {
            setIsEmpty ( true );
        }
    };
    const products = useAppSelector ( ( state ) => state.productsSlice.products );
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.inner} style ={styles}>
                        <RootWrapper blockBg>
                            <div className={s.inner_title}>
                                Admin Panel - Создание страницы
                            </div>
                        </RootWrapper>
                        <div className={s.columns_container}>
                            <div className={s.column}>
                                <div className={s.column_title}>Создание Страницы</div>
                                <AdminInput
                                    placeholder={"Титул страницы"}
                                    type={"text"}
                                    value={title}
                                    setInputValue={setTitle}
                                    textArea
                                    height={40}
                                    size={"long"}
                                />
                                <AdminInput
                                    placeholder={"Ссылка на фото превью"}
                                    type={"text"}
                                    value={productPhoto}
                                    setInputValue={serProductPhoto}
                                />
                                <AdminInput
                                    placeholder={"Ссылка для скачивания"}
                                    type={"text"}
                                    value={downloadLink}
                                    setInputValue={setDownloadLink}
                                />
                                <AdminInput
                                    placeholder={"Описание софта"}
                                    type={"text"}
                                    size={"long"}
                                    value={description}
                                    setInputValue={setDescription}
                                    textArea
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
                                <AdminInput
                                    placeholder={"File Format"}
                                    type={"text"}
                                    value={fileFormat}
                                    setInputValue={setFileFormat}
                                    textArea
                                    height={40}
                                    size={"long"}
                                />
                                <AdminInput
                                    placeholder={"File Size"}
                                    type={"text"}
                                    value={fileSize}
                                    setInputValue={setFileSize}
                                    textArea
                                    height={40}
                                    size={"long"}
                                />
                                <AdminInput
                                    placeholder={"Download Source"}
                                    type={"text"}
                                    value={downloadSource}
                                    setInputValue={setDownloadSource}
                                />
                                <AdminInput
                                    placeholder={"Unlock Password"}
                                    type={"text"}
                                    value={unlockPassword}
                                    setInputValue={setUnlockPassword}
                                    textArea
                                    height={40}
                                    size={"long"}
                                />
                                <div className={s.column}>
                                    <div className={s.column_title}>Download Links</div>
                                    <AdminInput
                                        placeholder={"Mirror link #1"}
                                        type={"text"}
                                        value={downloadLinksFirst}
                                        setInputValue={setDownloadLinksFirst}
                                    />
                                    <AdminInput
                                        placeholder={"Mirror link #2"}
                                        type={"text"}
                                        value={downloadLinksSecond}
                                        setInputValue={setDownloadLinksSecond}
                                    />
                                </div>
                            </div>
                            <div className={s.column}>
                                <div className={s.column_title}>How to install</div>
                                <AdminInput
                                    placeholder={"Step one"}
                                    type={"text"}
                                    value={howToInstallFirst}
                                    setInputValue={setHowToInstallFirst}
                                    textArea
                                    height={40}
                                    size={"long"}
                                />
                                <AdminInput
                                    placeholder={"Step two"}
                                    type={"text"}
                                    value={howToInstallSecond}
                                    setInputValue={setHowToInstallSecond}
                                    textArea
                                    height={40}
                                    size={"long"}
                                />
                                <AdminInput
                                    placeholder={"Step three"}
                                    type={"text"}
                                    value={howToInstallThird}
                                    setInputValue={setHowToInstallThird}
                                    textArea
                                    height={40}
                                    size={"long"}
                                />
                                <div className={s.column}>
                                    <div className={s.column_title}>Category</div>
                                    <AdminInput
                                        placeholder={"Категории"}
                                        type={"text"}
                                        value={categories}
                                        setInputValue={setCategories}
                                        textArea
                                        height={40}
                                        size={"long"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={s.btn_wrapper}>
                            <div className={s.main_btn} onClick={onSubmitHandler}>
                                <Button text="Создать страницу"/>
                            </div>
                        </div>
                        {isEmpty && (
                            <div className={s.error_container}>
                                Не все поля заполнены, заполните поля
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {products.length != 0 && (
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.inner}>
                            <div className={s.inner_title}>
                                Admin Panel - Редактирование и удаление страницы
                            </div>
                            <div className={s.pages_container}>
                                {products.map ( ( product ) => (
                                    <PageItem
                                        title={product.title}
                                        key={product._id}
                                        id={product._id}
                                        src={product.productPhoto}
                                    />
                                ) )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Create;
