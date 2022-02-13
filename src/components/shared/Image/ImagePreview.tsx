import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { useTheme } from "styled-components";
const StyledImagePreview = styled.div`
  background-color: ${props => props.theme.pallete.common.offwhite};
  height: 350px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.pallete.common.lightGrey};
`;
interface IImagePreviewProps {}

const ImagePreview = ({}: IImagePreviewProps) => {
  const appTheme = useTheme();

  return (
    <StyledImagePreview>
      <FontAwesomeIcon size="8x" icon={faPlus} color={appTheme.pallete.common.normalGrey} />
    </StyledImagePreview>
  );
};
export default ImagePreview;
