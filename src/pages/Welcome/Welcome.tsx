import React from "react";
import Container from "../../components/shared/Container";
import ImageContainer from "../../components/shared/ImageContainer";
import { CustomButton } from "../../components/ui/CustomButton/CustomButton";

const Welcome = () => {
  return (
    <Container>
      <ImageContainer>
        <p className="caption">
          <label>Image Approval Application</label>
        </p>

        <p>
          <label>Approved Images</label>
        </p>

        <CustomButton state={"cancel"} />
      </ImageContainer>
    </Container>
  );
};
export default Welcome;
