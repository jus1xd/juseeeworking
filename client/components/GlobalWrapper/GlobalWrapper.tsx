import React, { Children } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/useTypedSelector";
import s from "./.module.css";

const GlobalWrap = styled.div`
  * {
  transition: .9s;
  color: ${props => props.title || "#fff"}
  }
`;

const GlobalWrapper: React.FC = ({ children }): JSX.Element => {
  const config = useAppSelector((state) => state.configSlice.config);
  const scrollColor = config.colors.scrollColor;
  const fontColor = config.colors.fontColor;
  const backgroundColor = config.colors.backgroundColor;

  return <GlobalWrap color={scrollColor} title={fontColor} theme={backgroundColor}>{children}</GlobalWrap>;
};

export default GlobalWrapper;
