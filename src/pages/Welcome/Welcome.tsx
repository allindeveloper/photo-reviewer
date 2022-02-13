import Container from "components/shared/Container";
import ApprovedImages from "components/shared/Image/ApprovedImages";
import ImageContainer from "components/shared/ImageContainer";
import { CustomButton } from "components/ui/CustomButton/CustomButton";
import { Space } from "components/ui/Space/Space";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import React, { useEffect } from "react";
import styled from "styled-components";
import ImagePreview from "../../components/shared/Image/ImagePreview";
import useGetRandomImage from "../../hooks/useGetRandomImage";
import styles from "./welcome.module.css";

const StyledP = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 25px;
  color: ${props => props.theme.pallete.primary.main};
`;
const Welcome = () => {
  const dispatch = useAppDispatch();
  const approvedImages = useAppSelector(state => state.imageReducer);

  const { getRandomImage, loading, randomImage } = useGetRandomImage();
  useEffect(() => {}, []);

  const handleCancel = () => {};

  const handleApprove = () => {};

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
              <label>Approved Images</label>
            </StyledP>

            <ApprovedImages approvedImages={approvedImages} />
          </div>

          <div className={styles.bottomSection}>
            <hr />
            <ImagePreview
              imageUrl={randomImage.urls.regular}
              getRandomImage={handleGetRandomImage}
              isLoading={loading}
            />
            <hr />
            <Space top={40} />

            <div className={styles.welcomeActions}>
              <div>
                <CustomButton onClick={handleCancel} state={"cancel"} />
              </div>
              <div>
                <CustomButton onClick={handleApprove} state={"okay"} />
              </div>
            </div>
          </div>
        </ImageContainer>
      </Container>
    </div>
  );
};
export default Welcome;
