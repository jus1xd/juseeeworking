import React from "react";
import s from "./SoftCard.module.css";

// import enFlag from "../public/img/enFlag.svg";
import Image from "next/image";
import Tag from "./Tag/Tag";
import Link from "next/link";

const SoftCard: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.card_inner}>
            <Link href="/software/1">
              <a className={s.card_photo}>
                <Image
                  src="/img/SoftCard/cardAvatar.png"
                  width={163}
                  height={163}
                />
              </a>
            </Link>
            <div className={s.card_content}>
              <div className={s.main_content}>
                <div className={s.sub_content}>
                  <Link href="/software/1">
                    <a className={s.card_title}>
                      Adobe Photoshop (The last Version)
                    </a>
                  </Link>
                  <div className={s.card_tags}>
                    <Tag tagText={"Windows"} />
                    <Tag tagText={"Windows"} />
                    <Tag tagText={"Windows"} />
                  </div>
                </div>
                <Link href="/software/1">
                  <a className={s.main_btn}>Details</a>
                </Link>
              </div>
              <div className={s.card_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                venenatis convallis amet eu et ipsum. Ac, donec viverra
                tristique elit euismod molestie uismod egestas egestas.
                Sollicitudin sed adipiscing eu, ipsum purus et etiam mauris
                tristique. Consectetur id pretium semper Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Id venenatis convallis amet
                eu et ipsum. Ac, donec viverra tristique elit euismod molestie
                uismod egestas
              </div>
            </div>
          </div>

          <div className={s.mob_card_inner}>
            <div className={s.card_main_content}>
              <Link href="/software/1">
                <a className={s.card_photo}>
                  <Image
                    src="/img/SoftCard/cardAvatar.png"
                    width={68}
                    height={68}
                  />
                </a>
              </Link>
              <Link href="/software/1">
                <a className={s.card_title}>
                  Adobe Photoshop (The last Version)
                </a>
              </Link>
            </div>

            <div className={s.card_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              venenatis convallis amet eu et ipsum. Ac, donec viverra tristique
              elit euismod molestie uismod egestas egestas. Sollicitudin sed
              adipiscing eu, ipsum purus et etiam mauris tristique. Consectetur
              id pretium semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Id venenatis convallis amet eu et ipsum. Ac,
              donec viverra tristique elit euismod molestie uismod egestas
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftCard;
