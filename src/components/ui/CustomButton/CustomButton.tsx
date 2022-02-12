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
  background: url(${props => (props.state === "cancel" ? check : times)});
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
`;
export const CustomButton: React.FC<ICustomButtonProps> = ({ state = "cancel", disabled, onClick }) => {
  return <StyledCustomButton state={state} disabled={disabled} onClick={onClick}></StyledCustomButton>;
};
