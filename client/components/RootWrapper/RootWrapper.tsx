import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import styled from "styled-components";
import { getSiteConfig } from "../../store/thunks/condifigThunk";

const AppWrapper = styled.div`
  background-color: ${(props) => props.color || "#08121D"};
`;

type TProps = {
  fontColor?: boolean;
  headerBg?: boolean;
  underHeadColor?: boolean;
  appBg?: boolean;
  btnColor?: boolean;
  btnHoverColor?: boolean;
  blockBg?: boolean;
};

const RootWrapper: React.FC<TProps> = (
  { children },
  {
    fontColor,
    headerBg,
    underHeadColor,
    appBg,
    btnColor,
    btnHoverColor,
    blockBg,
  }: any
): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSiteConfig());
  }, []);

  const curColor = headerBg
    ? useAppSelector((state) => state.configSlice.config.colors.headerColor)
    : fontColor
    ? useAppSelector((state) => state.configSlice.config.colors.fontColor)
    : underHeadColor
    ? useAppSelector(
        (state) => state.configSlice.config.colors.underHeaderColor
      )
    : appBg
    ? useAppSelector((state) => state.configSlice.config.colors.backgroundColor)
    : btnColor
    ? useAppSelector((state) => state.configSlice.config.colors.buttonColor)
    : btnHoverColor
    ? useAppSelector(
        (state) => state.configSlice.config.colors.buttonHoverColor
      )
    : blockBg
    ? useAppSelector(
        (state) => state.configSlice.config.colors.blockBackgroundColor
      )
    : "";

  console.log(curColor);

  return (
    <>
      <AppWrapper color={curColor}>{children}</AppWrapper>
    </>
  );
};

export default RootWrapper;
