import React from "react";
import s from "./SoftCard.module.css";
import Image from "next/image";
import Tag from "./Tag/Tag";
import Link from "next/link";
import {IProductProps} from "../../types/products";
import Button from "../Button/Button";

const SoftCard = ( {
                       id,
                       title,
                       categories,
                       description,
                       productPhoto,
                   }: IProductProps ) => {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.card_inner}>
                        <Link href={`./software/${id}`}>
                            <div className={s.card_photo}>
                                <img
                                    src={productPhoto}
                                    width={163}
                                    height={163}
                                />
                            </div>
                        </Link>
                        <div className={s.card_content}>
                            <div className={s.main_content}>
                                <div className={s.sub_content}>
                                    <Link href={`./software/${id}`}>
                                        <div className={s.card_title}>{title}</div>
                                    </Link>
                                    <div className={s.card_tags}>
                                        {categories && categories.map ( ( item, idx ) => <Tag key={idx}
                                                                                              tagText={item}/> )}
                                    </div>
                                </div>
                                <Link href={`./software/${id}`}>
                                    <div className={s.main_btn}>
                                        <Button text={"Details"}/>
                                    </div>
                                </Link>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{__html: description.replace ( new RegExp ( '\r?\n', 'g' ), '<br />' )}}
                                className={s.card_description}/>
                        </div>
                    </div>

                    <div className={s.mob_card_inner}>
                        <div className={s.card_main_content}>
                            <Link href={`/software/${id}`}>
                                <div className={s.card_photo}>
                                    <Image
                                        src="/img/SoftCard/cardAvatar.png"
                                        width={68}
                                        height={68}
                                    />
                                </div>
                            </Link>
                            <Link href={`/software/${id}`}>
                                <div className={s.card_title}>{title}</div>
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
