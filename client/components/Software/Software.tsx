// @ts-nocheck
import React, { useRef, useState } from "react";
import s from "./Software.module.css";
import Image from "next/image";
import Comment from "./Comment/Comment";
import { IProduct } from "../../types/products";
import RootWrapper from "../RootWrapper/RootWrapper";

const Software = ({ product }: IProduct) => {
  const sliderContent = useRef(null);
  let [curPosition, setCurPosition] = useState<number>(0);
  const nextHandler = () => {
    setCurPosition((curPosition -= 412));
    sliderContent.current.style.transform = `translateX(${curPosition}px)`;
    if (Math.abs(curPosition) >= sliderContent.current!.scrollWidth - 412) {
      setCurPosition(412);
    }
  };
  const prevHandler = () => {
    if (curPosition <= -412) {
      setCurPosition((curPosition += 412));
      sliderContent.current.style.transform = `translateX(${curPosition}px)`;
      console.log(curPosition);
    } else {
      setCurPosition(0);
    }
  };

  return (
    <>
      <div className={s.soft_info}>
        <div className={s.container}>
          <div className={s.info_inner}>
            <div className={s.soft_photo}>
              <img
                src={product.productPhoto}
                width={200}
                height={200}
                alt = {'productPhoto'}
              />
              <div className={s.btn_wrapper}>
                <div className={s.main_btn}>Download</div>
              </div>
            </div>
            <div className={s.soft_content}>
              <div className={s.soft_title}>{product.title}</div>
              <div className={s.soft_text}>{product.description}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.slider}>
        <div className={s.container}>
          <div className={s.slider_inner}>
            <div className={s.slider_arrow} onClick={prevHandler}>
              <Image
                src="/img/icons/Software/arrow.svg"
                width={50}
                height={50}
              />
            </div>
            <div
              className={`${s.slider_arrow} ${s.right_arrow}`}
              onClick={nextHandler}
            >
              <Image
                src="/img/icons/Software/arrow.svg"
                width={50}
                height={50}
              />
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
          <div className={s.inner}>
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
          <div className={s.inner}>
            <RootWrapper blockBg>
              <div className={s.inner_title}>How to install</div>
            </RootWrapper>
            <ol className={s.details_container}>
              <li className={s.detail_item}> {product.howToInstall.stepOne}</li>
              <li className={s.detail_item}> {product.howToInstall.stepTwo}</li>
              <li className={s.detail_item}>
                {product.howToInstall.stepThree}
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <RootWrapper blockBg>
              <div className={s.inner_title}>Download links</div>
            </RootWrapper>
            <div className={s.download_section}>
              <ol className={s.details_container}>
                <li className={s.detail_item}>
                  Mirror link: {product.downloadLinks.firstLink}
                </li>
                <li className={s.detail_item}>
                  Mirror link: {product.downloadLinks.secondLink}
                </li>
              </ol>
              <div className={s.btn_wrapper_b}>
                <div className={s.main_btn}>Download</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={`${s.inner} ${s.comments}`}>
            <RootWrapper blockBg>
              <div className={s.inner_title}>Comments</div>
            </RootWrapper>
            <div className={s.comments_section}>
              <Comment />
              <Comment />
              <Comment />
            </div>
            <div className={s.submit_area}>
              <input
                type="text"
                className={s.comment_input}
                placeholder="Type comment..."
              />
              <div className={s.btn_wrapper_c}>
                <div className={s.main_btn}>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Software;
