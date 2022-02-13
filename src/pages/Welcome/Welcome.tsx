import Container from "components/shared/Container";
import ApprovedImages from "components/shared/Image/ApprovedImages";
import ImageContainer from "components/shared/ImageContainer";
import { CustomButton } from "components/ui/CustomButton/CustomButton";
import { Space } from "components/ui/Space/Space";
import { useAppDispatch } from "hooks/hooks";
import React, { useEffect } from "react";
import ImagePreview from "../../components/shared/Image/ImagePreview";
import styles from "./welcome.module.css";
const Welcome = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);

  const handleCancel = () => {};

  const handleApprove = () => {};
  return (
    <div className={styles.welcomeRoot}>
      <Container>
        <ImageContainer>
          <div className={styles.caption}>
            <p className="caption">
              <label>Image Approval Application</label>
            </p>
          </div>

          <hr />

          <div className={styles.approvedImages}>
            <p>
              <label>Approved Images</label>
            </p>

            <ApprovedImages />
          </div>

          <div className={styles.bottomSection}>
            <ImagePreview />
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
