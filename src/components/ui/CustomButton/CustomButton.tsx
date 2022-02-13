import check from "assets/svg/check-solid.svg";
import times from "assets/svg/xmark-solid.svg";
import React from "react";
import styled from "styled-components";

export interface ICustomButtonProps {
  state?: "cancel" | "okay";
  disabled?: boolean;
  onClick?: () => void;
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
  height: 50px;
  width: 200px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  img {
    width: 10%;
  }
`;
export const CustomButton: React.FC<ICustomButtonProps> = ({ state = "cancel", disabled, onClick }) => {
  return (
    <StyledCustomButton state={state} disabled={disabled} onClick={onClick}>
      <img src={state === "cancel" ? times : check} />
    </StyledCustomButton>
  );
};
