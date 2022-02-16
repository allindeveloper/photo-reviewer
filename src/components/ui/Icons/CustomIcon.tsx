import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "styled-components";

export interface CustomIconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon: FontAwesomeIconProps["icon"];
  testid?: string;
}

export const CustomIcon: React.FC<CustomIconProps> = ({ testid, size = "4x", color, icon, style, ...rest }) => {
  const appTheme = useTheme();
  const iconColor = color || appTheme.pallete.common.white;
  return <FontAwesomeIcon data-testid={testid} style={style} color={iconColor} size={size} {...rest} icon={icon} />;
};

export default CustomIcon;
