import Container from "components/shared/Container";
import ApprovedImages from "components/shared/Image/ApprovedImages";
import ImagePreview from "components/shared/Image/ImagePreview";
import ImageContainer from "components/shared/ImageContainer";
import { CustomButton } from "components/ui/CustomButton/CustomButton";
import PlusIcon from "components/ui/Icons/PlusIcon";
import { Space } from "components/ui/Space/Space";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import useGetRandomImage from "hooks/useGetRandomImage";
import React from "react";
import { approveImage, rejectImage } from "redux/reducers/imageReducer";
import {
  ApprovedImagesSection,
  BottomSection,
  StyledP,
  WelcomeActions,
  WelcomeEmpty,
} from "../../styles/welcomeStyles";

const Welcome = () => {
  const dispatch = useAppDispatch();
  const images = useAppSelector(state => state.imageReducer);

  const { getRandomImage, loading, randomImage } = useGetRandomImage();
  const imageExist = images.approvedImages.some(
    item => item.id === randomImage.id && item.urls.regular === randomImage.urls.regular,
  );
  const rejectedimageExist = images.rejectedImages.some(
    item => item.id === randomImage.id && item.urls.regular === randomImage.urls.regular,
  );
  const handleCancel = () => {
    if (randomImage?.urls?.regular) {
      if (!rejectedimageExist) {
        dispatch(rejectImage(randomImage));
        getRandomImage();
      }
    }
  };

  const handleApprove = () => {
    if (randomImage?.urls?.regular) {
      if (!imageExist) {
        dispatch(approveImage(randomImage));
      }
    }
  };

  const handleGetRandomImage = () => {
    getRandomImage();
  };
  return (
    <div>
      <Container>
        <ImageContainer>
          <StyledP paddingLeft={30}>
            <label>Image Approval Application</label>
          </StyledP>
          <Space top={15} />

          <hr />

          <ApprovedImagesSection>
            <StyledP>
              <label>Approved Images ({images?.approvedImages.length})</label>
            </StyledP>

            <ApprovedImages approvedImages={images?.approvedImages} />
          </ApprovedImagesSection>

          <BottomSection>
            <hr />
            <Space top={25} />
            <ImagePreview
              imageUrl={randomImage.urls.regular}
              description={randomImage.description}
              getRandomImage={handleGetRandomImage}
              isLoading={loading}
              testId={"getRandomImage"}
            />
            <Space top={45} />
            <hr />
            <Space top={40} />

            {!randomImage?.urls?.regular && (
              <WelcomeEmpty>
                <label data-testid="welcomeEmpty">
                  Click on the <PlusIcon size="1x" /> in order to get image recommendations
                </label>
              </WelcomeEmpty>
            )}
            {randomImage?.urls?.regular && (
              <WelcomeActions>
                <div>
                  <CustomButton testId="rejectButton" onClick={handleCancel} state={"cancel"} />
                </div>
                <div>
                  <CustomButton testId="approveButton" onClick={handleApprove} state={"okay"} />
                </div>
              </WelcomeActions>
            )}
            <Space top={25} />
          </BottomSection>
        </ImageContainer>
      </Container>
    </div>
  );
};
export default Welcome;
