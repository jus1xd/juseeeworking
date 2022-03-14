import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { AppProps } from "next/app";
import styled from "styled-components";
import { getSiteConfig } from "../../store/thunks/condifigThunk";

const AppWrapper = styled.div`
  background-color: ${(props) => props.bgColor || "#08121D"};
`;

const RootWrapper: React.FC = ({ children }): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSiteConfig());
  }, []);

  const backgroundColor = useAppSelector((state) => state.configSlice.config.colors.backgroundColor);

  console.log(backgroundColor);  

  return (
    <>
      <AppWrapper bgColor={backgroundColor}>{children}</AppWrapper>
    </>
  );
};

export default RootWrapper;
