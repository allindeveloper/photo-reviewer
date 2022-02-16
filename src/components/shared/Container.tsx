import React from "react";
import styled from "styled-components";
import { device } from "../../styles/mediaQuery";

const StyledContainer = styled.div`
  @media ${device.laptop} {
    max-width: 600px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
  @media ${device.mobileS} {
    padding: 30px 20px 30px 20px;
  }
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
  padding: 30px 50px 30px 60px;
  background-color: ${props => props.theme.pallete.primary.main};
`;
interface IContainerProps {
  children: React.ReactChild | React.ReactChild[];
}

const Container = ({ children }: IContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default Container;
