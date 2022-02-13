import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { useTheme } from "styled-components";

export interface IApprovedImageProps {
  islast?: boolean;
  firstIndex?: number;
}
const StylesApprovedImage = styled.div<IApprovedImageProps>`
  background-color: ${props => props.theme.pallete.common.offwhite};
  border-radius: 4px;
  height: 100px;
  text-align: center;
  display: inline-block;
  margin: 0 10px;
  width: 160px;
  userselect: "none";
  border: 1px solid ${props => props.theme.pallete.common.lightGrey};
`;

const ApprovedImage = ({ islast, firstIndex }: IApprovedImageProps) => {
  const appTheme = useTheme();
  return (
    <StylesApprovedImage tabIndex={0} firstIndex={firstIndex} islast={islast}>
      <FontAwesomeIcon icon={faPlus} color={appTheme.pallete.common.normalGrey} />
    </StylesApprovedImage>
  );
};
export default ApprovedImage;
