//@ts-nocheck
import React, { useRef, useState } from "react";
import s from "./Software.module.css";

import Image from "next/image";
import Comment from "./Comment/Comment";
import next from "next";

const Software: React.FC = ({}): JSX.Element => {
  const sliderContent = useRef(null);
  // const sliderItemWidth = 0
  let [curPosition, setCurPosition] = useState<number>(0);

  const nextHandler = () => {
    setCurPosition((curPosition -= 412));

    sliderContent.current.style.transform = `translateX(${curPosition}px)`;
    console.log(curPosition);
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
              <Image
                src="/img/SoftCard/cardAvatar.png"
                width={200}
                height={200}
              />
              <div className={s.btn_wrapper}>
                <div className={s.main_btn}>Download</div>
              </div>
            </div>
            <div className={s.soft_content}>
              <div className={s.soft_title}>
                Adobe Photoshop (The last Version)
              </div>
              <div className={s.soft_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                venenatis amet eu et ipsum. Ac, donec viverra tristique elit
                euismod molestie uismod egestas egestas. Sollicitudin sed
                adipiscing eu, ipsum purus et etiam mauris tristique.
                Consectetur id pretium semper Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Id venenatis amet eu et ipsum. Ac,
                donec viverra tristique elit euismod molestie uismod egestas
                egestas. Sollicitudin sed adipiscing eu, ipsum purus et etiam
                mauris tristique. Consectetur id pretium semper Consectetur id
                pretium semper Lorem ipsum dolor sit amet, consectetur
              </div>
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
                  <Image
                    src="/img/Software/sliderImg.png"
                    width={412}
                    height={265}
                  />
                </div>
                <div className={s.image_container}>
                  <Image
                    src="/img/Software/sliderImg.png"
                    width={412}
                    height={265}
                  />
                </div>
                <div className={s.image_container}>
                  <Image
                    src="/img/Software/sliderImg.png"
                    width={412}
                    height={265}
                  />
                </div>
                <div className={s.image_container}>
                  <Image
                    src="/img/Software/sliderImg.png"
                    width={412}
                    height={265}
                  />
                </div>
                <div className={s.image_container}>
                  <Image
                    src="/img/Software/sliderImg.png"
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
            <div className={s.inner_title}>General Details</div>
            <ul className={s.details_container}>
              <li className={s.detail_item}>File Format: EXE</li>
              <li className={s.detail_item}>File Size: 1,3 GB</li>
              <li className={s.detail_item}>Download Source: Own Crack</li>
              <li className={s.detail_item}>Unlock Password: None</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>How to install</div>
            <ul className={s.details_container}>
              <div className={s.detail_item}>1. App Backup & Share Pro Apk</div>
              <div className={s.detail_item}>2. Install it</div>
              <div className={s.detail_item}>3. Done!</div>
            </ul>
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.inner_title}>Download links</div>
            <div className={s.download_section}>
              <ul className={s.details_container}>
                <div className={s.detail_item}>
                  1. Mirror link: https://mirrorlink/photoshop.exe
                </div>
                <div className={s.detail_item}>
                  2. Mirror link: https://mirrorlink/photoshop.exe
                </div>
              </ul>
              <div className={s.btn_wrapper_b}>
                <div className={s.main_btn}>Download</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gf   */}
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={`${s.inner} ${s.comments}`}>
            <div className={s.inner_title}>Comments</div>
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
