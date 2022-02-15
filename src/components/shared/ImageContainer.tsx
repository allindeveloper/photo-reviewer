import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  border-radius: 6px;
  width: 100%;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  padding-bottom: 30px;
  background-color: ${props => props.theme.pallete.common.white};
`;
interface IImageContainerProps {
  children: React.ReactChild | React.ReactChild[];
}

const ImageContainer = ({ children }: IImageContainerProps) => {
  return <StyledImageContainer>{children}</StyledImageContainer>;
};
export default ImageContainer;
