import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { useTheme } from "styled-components";
import PreLoader from "../../ui/Loader/PreLoader";
const StyledImagePreview = styled.div`
  background-color: ${props => props.theme.pallete.common.offwhite};
  height: 350px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${props => props.theme.pallete.common.lightGrey};
  img {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 39%;
    height: 40%;
  }
`;
interface IImagePreviewProps {
  getRandomImage: () => void;
  imageUrl?: string;
  isLoading?: boolean;
}

const ImagePreview = ({ isLoading, getRandomImage, imageUrl }: IImagePreviewProps) => {
  const appTheme = useTheme();

  return (
    <StyledImagePreview onClick={getRandomImage}>
      {isLoading && (
        <div>
          <PreLoader />
        </div>
      )}
      {!isLoading && imageUrl && imageUrl && (
        <div>
          <img src={imageUrl} />
        </div>
      )}

      {!isLoading && !imageUrl && (
        <div>
          <FontAwesomeIcon size="8x" icon={faPlus} color={appTheme.pallete.common.normalGrey} />
        </div>
      )}
    </StyledImagePreview>
  );
};
export default ImagePreview;
