import React from "react";
import Container from "../../components/shared/Container";
import ImageContainer from "../../components/shared/ImageContainer";
import { CustomButton } from "../../components/ui/CustomButton/CustomButton";
import { Space } from "../../components/ui/Space/Space";
import styles from "./welcome.module.css";
const Welcome = () => {
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
          </div>

          <div className={styles.bottomSection}>
            <hr />
            <Space top={40} />

            <div className={styles.welcomeActions}>
              <div>
                <CustomButton state={"cancel"} />
              </div>
              <div>
                <CustomButton state={"okay"} />
              </div>
            </div>
          </div>
        </ImageContainer>
      </Container>
    </div>
  );
};
export default Welcome;
