import React, {useState} from "react";
import s from "./Create.module.css";
import AdminInput from "../Input/Input";
import PageItem from "./PageItem/PageItem";

const Create: React.FC = ({}): JSX.Element => {
  const [title, setTitle] = useState<string> ('');
  const [productPhoto, serProductPhoto] = useState<string> ('');
  const [downloadLink, setDownloadLink] = useState<string> ('');
  const [description, setDescription] = useState<string> ('');
  const [previewPictureFirst, setPreviewPictureFirst] = useState<string> ('');
  const [previewPictureSecond, setPreviewPictureSecond] = useState<string> ('');
  const [fileFormat, setFileFormat] = useState<string> ('');
  const [fileSize, setFileSize] = useState<string> ('');
  const [downloadSource, setDownloadSource] = useState<string>('')
  const [unlockPassword, setUnlockPassword] = useState<string> ('');
  const [downloadLinksFirst, setDownloadLinksFirst] = useState<string> ('');
  const [downloadLinksSecond, setDownloadLinksSecond] = useState<string> ('');
  const [howToInstallFirst, setHowToInstallFirst] = useState<string> ('');
  const [howToInstallSecond, setHowToInstallSecond] = useState<string> ('');
  const [howToInstallThird, setHowToInstallThird] = useState<string> ('');
  const [categories, setCategories] = useState<string> ();

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>Admin Panel - Создание страницы</div>
            <div className={s.columns_container}>
              <div className={s.column}>
                <div className={s.column_title}>Создание Страницы</div>
                <AdminInput placeholder={"Титул страницы"} type={"text"} value={title} setInputValue={setTitle} />
                <AdminInput
                  placeholder={"Ссылка на фото превью"}
                  type={"text"}
                  value={productPhoto}
                  setInputValue={serProductPhoto}
                />
                <AdminInput
                  placeholder={"Ссылка на скачивание файла"}
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
                <AdminInput placeholder={"File Format"} type={"text"} value={fileFormat} setInputValue={setFileFormat} />
                <AdminInput placeholder={"File Size"} type={"text"} value={fileSize} setInputValue={setFileSize} />
                <AdminInput placeholder={"Download Source"} type={"text"} value={downloadSource} setInputValue={setDownloadSource} />
                <AdminInput placeholder={"Unlock Password"} type={"text"} value={unlockPassword} setInputValue={setUnlockPassword} />
                <div className={s.column}>
                  <div className={s.column_title}>Download Links</div>
                  <AdminInput placeholder={"Mirror link #1"} type={"text"} value={downloadLinksFirst} setInputValue={setDownloadLinksFirst} />
                  <AdminInput placeholder={"Mirror link #2"} type={"text"} value={downloadLinksSecond} setInputValue={setDownloadLinksSecond} />
                </div>
              </div>
              <div className={s.column}>
                <div className={s.column_title}>How to install</div>
                <AdminInput placeholder={"1 point"} type={"text"} value={howToInstallFirst} setInputValue={setHowToInstallFirst} />
                <AdminInput placeholder={"2 point"} type={"text"} value={howToInstallSecond} setInputValue={setHowToInstallSecond} />
                <AdminInput placeholder={"3 point"} type={"text"} value={howToInstallThird} setInputValue={setHowToInstallThird} />
                <div className={s.column}>
                  <div className={s.column_title}>Category</div>
                  <AdminInput placeholder={"Категория 1"} type={"text"} value={categories} setInputValue={setCategories} />
                </div>
              </div>
            </div>
            <div className={s.btn_wrapper}>
              <div className={s.main_btn}>Создать страницу</div>
            </div>
            <div className={s.error_container}>
              Не все поля заполнены, заполните поля
            </div>
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>
              Admin Panel - Редактирование и удаление страницы
            </div>
            <div className={s.pages_container}>
              <PageItem />
              <PageItem />
              <PageItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
