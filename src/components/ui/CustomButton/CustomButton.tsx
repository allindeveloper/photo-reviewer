import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { CustomIcon } from "../Icons/CustomIcon";

export interface ICustomButtonProps {
  state?: "cancel" | "okay";
  disabled?: boolean;
  onClick?: () => void;
  testId?: string;
}
const StyledCustomButton = styled.div<ICustomButtonProps>`
  background-size: contain;
  background-color: ${props =>
    props.state === "cancel" ? props.theme.pallete.common.brown : props.theme.pallete.primary.main};
  background-repeat: no-repeat;
  color: ${props => props.theme.pallete.common.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding-left: 70px;
  padding-right: 70px;
  border-radius: 30px;
  cursor: pointer;
  img {
    width: 10%;
  }
  @media (max-width: 450px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
export const CustomButton: React.FC<ICustomButtonProps> = ({
  testId = "customButton",
  state = "cancel",
  disabled,
  onClick,
}) => {
  return (
    <StyledCustomButton data-testid={testId} state={state} disabled={disabled} onClick={onClick}>
      {state === "cancel" ? (
        <CustomIcon testid="cancelButtonIcon" icon={faTimes} size="2x" />
      ) : (
        <CustomIcon testid="checkButtonIcon" size="2x" icon={faCheck} />
      )}
    </StyledCustomButton>
  );
};
