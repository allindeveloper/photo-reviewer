import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "styled-components";

export interface PlusIconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon?: FontAwesomeIconProps["icon"];
}

export const PlusIcon: React.FC<PlusIconProps> = ({ size = "4x" }) => {
  const appTheme = useTheme();
  return <FontAwesomeIcon size={size} icon={faPlus} color={appTheme.pallete.common.normalGrey} />;
};

export default PlusIcon;
