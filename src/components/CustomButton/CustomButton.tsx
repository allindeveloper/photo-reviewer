import React from "react";

export interface ICustomButtonProps {
  type: "cancel" | "okay";
  disabled?: boolean;
  onClick?: () => void;
}
export const CustomButton: React.FC<ICustomButtonProps> = ({ disabled, onClick }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}></button>
    </>
  );
};
