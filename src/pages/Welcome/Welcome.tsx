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
import styled from "styled-components";
import styles from "./welcome.module.css";
const StyledP = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 25px;
  font-weight: bolder;
  color: ${props => props.theme.pallete.primary.main};
`;
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
    <div className={styles.welcomeRoot}>
      <Container>
        <ImageContainer>
          <div className={styles.caption}>
            <StyledP className="caption">
              <label>Image Approval Application</label>
            </StyledP>
          </div>
          <Space top={15} />

          <hr />

          <div className={styles.approvedImages}>
            <StyledP>
              <label>Approved Images ({images?.approvedImages.length})</label>
            </StyledP>

            <ApprovedImages approvedImages={images?.approvedImages} />
          </div>

          <div className={styles.bottomSection}>
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
              <div className={styles.welcomeEmpty}>
                <label data-testid="welcomeEmpty">
                  Click on the <PlusIcon size="1x" /> in order to get image recommendations
                </label>
              </div>
            )}
            {randomImage?.urls?.regular && (
              <div className={styles.welcomeActions}>
                <div>
                  <CustomButton testId="rejectButton" onClick={handleCancel} state={"cancel"} />
                </div>
                <div>
                  <CustomButton testId="approveButton" onClick={handleApprove} state={"okay"} />
                </div>
              </div>
            )}
            <Space top={25} />
          </div>
        </ImageContainer>
      </Container>
    </div>
  );
};
export default Welcome;
