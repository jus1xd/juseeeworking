import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import styled from "styled-components";
import {getSiteConfig} from "../../store/thunks/configThunk";

const AppWrapper = styled.div`
  background-color: ${(props) => props.color || "#08121D"};
  height: max-content;
`;

const BtnWrapper = styled.div`
  background-color: ${(props) => props.color || "#08121D"};
  box-shadow: 0px 0px 30px 1px ${(props) => props.color || "#08121D"}65;
  height: max-content;
  overflow: hidden;
  border-radius: 3px;
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSiteConfig());
  }, []);
  const config = useAppSelector((state) => state.configSlice.config);
  let curColor: string = "";
  if (Object.keys(config).length !== 0) {
    if (headerBg) {
      curColor = useAppSelector(
        (state) => state.configSlice.config.colors.headerColor
      );
    } else if (underHeadColor) {
      curColor = useAppSelector(
        (state) => state.configSlice.config.colors.underHeaderColor
      );
    } else if (appBg) {
      curColor = useAppSelector(
        (state) => state.configSlice.config.colors.backgroundColor
      );
    } else if (btnColor) {
      curColor = useAppSelector(
        (state) => state.configSlice.config.colors.buttonColor
      );
    } else if (btnHoverColor) {
      curColor = useAppSelector(
        (state) => state.configSlice.config.colors.buttonHoverColor
      );
    } else if (blockBg) {
      curColor = useAppSelector(
        (state) => state.configSlice.config.colors.blockBackgroundColor
      );
    }
  }

  return (
    <>
      {btnColor ? (
        <BtnWrapper color={curColor}>{children}</BtnWrapper>
      ) : (
        <AppWrapper color={curColor}>{children}</AppWrapper>
      )}
    </>
  );
};

export default RootWrapper;
