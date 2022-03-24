import React from "react";
import RootWrapper from "../RootWrapper/RootWrapper";
import s from "./Button.module.css";
import Link from 'next/link'

type TProps = {
    text: string;
    href?: string
};

const Button: React.FC<TProps> = ( {text, href} ): JSX.Element => {
    return (
        <RootWrapper btnColor btnHoverColor>
            {href ?
                <Link href={href}>
                    <a className={s.main_btn}>{text}</a>
                </Link> :
                <a className={s.main_btn}>{text}</a>
            }
        </RootWrapper>
    );
};

export default Button;
