import styled from "styled-components";

export const StyledP = styled.p<{ paddingLeft?: number }>`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 25px;
  padding-left: ${props => props.paddingLeft}px;
  font-weight: bolder;
  color: ${props => props.theme.pallete.primary.main};
`;
export const WelcomeEmpty = styled.div`
  text-align: center;
  width: 60%;
  margin: auto;
  opacity: 0.5;
`;
export const WelcomeActions = styled.div`
  display: flex;
  justify-content: space-between;
  height: "100%";
`;

export const ApprovedImagesSection = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

export const BottomSection = styled.div`
  padding: 10px 30px;
`;
