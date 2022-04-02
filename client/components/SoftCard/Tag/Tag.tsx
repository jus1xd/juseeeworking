import React from "react";
import s from "./Tag.module.css";
import RootWrapper from "../../RootWrapper/RootWrapper";

type TProps = {
    tagText: string
}

const Tag: React.FC<TProps> = ( {tagText} ): JSX.Element => {
    return (
        <>
            <div className={s.wrap}>
                <RootWrapper btnColor btnHoverColor>
                    <div className={s.wrapper}>
                        {tagText}
                    </div>
                </RootWrapper>
            </div>
        </>
    );
};

export default Tag;
