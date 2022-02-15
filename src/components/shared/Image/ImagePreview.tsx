import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { useTheme } from "styled-components";
import PreLoader from "../../ui/Loader/PreLoader";
const StyledImagePreview = styled.div`
  background-color: ${props => props.theme.pallete.common.offwhite};
  height: 450px;
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
    max-width: 70%;
    object-fit: cover;
    height: 100%;
  }
  &:hover {
    background-color: ${props => props.theme.pallete.common.lightGrey};
  }
`;
interface IImagePreviewProps {
  getRandomImage: () => void;
  imageUrl?: string;
  description?: string;
  isLoading?: boolean;
  testId?: string;
}

const ImagePreview = ({ testId, isLoading, getRandomImage, imageUrl, description }: IImagePreviewProps) => {
  const appTheme = useTheme();

  return (
    <StyledImagePreview data-testid={testId} onClick={getRandomImage}>
      {isLoading && (
        <div data-testid={"imagePreloader"}>
          <PreLoader />
        </div>
      )}
      {!isLoading && imageUrl && imageUrl && (
        <div>
          <img data-testid={"imagePreview"} src={imageUrl} alt={description} />
        </div>
      )}

      {!isLoading && !imageUrl && (
        <div>
          <FontAwesomeIcon data-testid="imagePlus" size="8x" icon={faPlus} color={appTheme.pallete.common.normalGrey} />
        </div>
      )}
    </StyledImagePreview>
  );
};
export default ImagePreview;
