import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "styled-components";

export interface CustomIconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon: FontAwesomeIconProps["icon"];
}

export const CustomIcon: React.FC<CustomIconProps> = ({ size = "4x", color, icon }) => {
  const appTheme = useTheme();
  const iconColor = color || appTheme.pallete.common.white;
  return <FontAwesomeIcon color={iconColor} size={size} icon={icon} />;
};

export default CustomIconProps;
