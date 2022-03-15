import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import styled from "styled-components";
import { getSiteConfig } from "../../store/thunks/condifigThunk";

const AppWrapper = styled.div`
  background-color: ${(props) => props.color || "#08121D"};
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

  let curColor: string = "";

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

  return (
    <>
      <AppWrapper color={curColor}>{children}</AppWrapper>
    </>
  );
};

export default RootWrapper;
