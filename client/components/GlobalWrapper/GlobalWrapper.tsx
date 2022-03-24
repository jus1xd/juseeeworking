import React from "react";
import styled from "styled-components";
import {useAppSelector} from "../../hooks/useTypedSelector";

const GlobalWrap = styled.div`
  * {
    transition: .9s;
    color: ${props => props.color ? props.color : "#ffff"};
  }
`;

const GlobalWrapper: React.FC = ( {children} ): JSX.Element => {
    const config = useAppSelector ( ( state ) => state.configSlice.config );
    const fontColor = config.colors.fontColor;
    const backgroundColor = config.colors.backgroundColor;
    return <GlobalWrap color={fontColor} theme={backgroundColor}>{children}</GlobalWrap>;
};

export default GlobalWrapper;
