import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  border-radius: 6px;
  width: 100%;
  background-color: ${props => props.theme.pallete.common.white};
`;
interface IImageContainerProps {
  children: React.ReactChild | React.ReactChild[];
}

const ImageContainer = ({ children }: IImageContainerProps) => {
  return <StyledImageContainer>{children}</StyledImageContainer>;
};
export default ImageContainer;
