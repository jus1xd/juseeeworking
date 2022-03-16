import React from "react";
import s from "./SoftCard.module.css";
import Image from "next/image";
import Tag from "./Tag/Tag";
import Link from "next/link";
import { IProductProps } from "../../types/products";
import Button from "../Button/Button";

const SoftCard = ({
  id,
  title,
  categories,
  description,
  productPhoto,
}: IProductProps) => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.card_inner}>
            <Link href={`./software/${id}`}>
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
                  <Link href={`./software/${id}`}>
                    <a className={s.card_title}>{title}</a>
                  </Link>
                  <div className={s.card_tags}>
                    {categories &&
                      categories.map((item) => <Tag tagText={item} />)}
                  </div>
                </div>
                <Link href={`./software/${id}`}>
                  <a className={s.main_btn}>
                    <Button text={"Details"} />
                  </a>
                </Link>
              </div>
              <div className={s.card_description}>{description}</div>
            </div>
          </div>

          <div className={s.mob_card_inner}>
            <div className={s.card_main_content}>
              <Link href={`/software/${id}`}>
                <a className={s.card_photo}>
                  <Image
                    src="/img/SoftCard/cardAvatar.png"
                    width={68}
                    height={68}
                  />
                </a>
              </Link>
              <Link href={`/software/${id}`}>
                <a className={s.card_title}>{title}</a>
              </Link>
            </div>

            <div className={s.card_description}>{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftCard;
