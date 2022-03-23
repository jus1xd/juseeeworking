import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import styled from "styled-components";
import { getSiteConfig } from "../../store/thunks/configThunk";

const AppWrapper = styled.div`
  background-color: ${(props) => props.color || "#08121D"};
  height: max-content;
  transition: .9s;
`;

const BtnWrapper = styled.div`
  background-color: ${(props) => props.color || "#08121D"};
  box-shadow: 0px 0px 30px 1px ${(props) => props.color || "#08121D"}65;
  height: max-content;
  overflow: hidden;
  border-radius: 3px;
  transition: .2s;

  &:hover {
    transition: .2s;
    background-color: ${(props) => props.title || "#08121D"};
  }
`;

type TProps = {
  fontColor?: boolean | undefined;
  headerBg?: boolean | undefined;
  underHeadColor?: boolean | undefined;
  appBg?: boolean | undefined;
  btnColor?: boolean | undefined;
  btnHoverColor?: boolean | undefined;
  blockBg?: boolean | undefined;
};

const RootWrapper: React.FC<TProps> = ({
  children,
  headerBg,
  underHeadColor,
  appBg,
  btnColor,
  btnHoverColor,
  blockBg,
}): JSX.Element => {
  const config = useAppSelector((state) => state.configSlice.config);
  const headerColor = config.colors.headerColor;
  const underHeadColorCfg = config.colors.underHeaderColor;
  const backgroundColor = config.colors.backgroundColor;
  const buttonColor = config.colors.buttonColor;
  const buttonHover = config.colors.buttonHoverColor;
  const blockBgColor = config.colors.blockBackgroundColor;
  let curColor: string = "";
  let curColorHover: string = "";

  if (headerBg) {
    curColor = headerColor;
  } else if (underHeadColor) {
    curColor = underHeadColorCfg;
  } else if (appBg) {
    curColor = backgroundColor;
  } else if (btnColor) {
    curColor = buttonColor;
    if (btnHoverColor) {
       curColorHover = buttonHover;
    }
  } else if (blockBg) {
    curColor = blockBgColor;
  }

  return (
    <>
      {btnColor ? (
        <BtnWrapper color={curColor} title={curColorHover}>
          {children}
        </BtnWrapper>
      ) : (
        <AppWrapper color={curColor}>{children}</AppWrapper>
      )}
    </>
  );
};

export default RootWrapper;
