import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { useTheme } from "styled-components";
import CustomIcon from "../../ui/Icons/CustomIcon";

interface CardProps {
  imageUrl?: string;
  backgroundColor?: string;
  title: string;
  itemId: string;
}
const StyledCard = styled.div<CardProps>`
  background-color: ${props =>
    props.imageUrl ? props.theme.pallete.primary.main : props.theme.pallete.common.offwhite};
  height: 60px;
  background-blend-mode: ${props => (props.imageUrl ? "overlay" : "blend")};
  border-radius: ${props => (props.imageUrl ? "6px" : "4px")};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.imageUrl}) ${props => props.imageUrl && "rgb(59 85 230)"};
  background-size: cover;
  position: relative;
  border: 1px solid ${props => props.theme.pallete.common.lightGrey};
`;
const StyledCardChecked = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
`;
export const Card = ({ title, itemId, imageUrl }: CardProps) => {
  const appTheme = useTheme();

  return (
    <StyledCard
      role="button"
      style={{
        margin: "0px 8px 0px 8px",
        width: "110px",
        userSelect: "none",
      }}
      title={title}
      itemId={itemId}
      imageUrl={imageUrl}
      tabIndex={0}
      className="card"
    >
      {imageUrl && (
        <StyledCardChecked>
          <CustomIcon size="lg" icon={faCheck} />
        </StyledCardChecked>
      )}
      {!imageUrl && <FontAwesomeIcon size="2x" icon={faPlus} color={appTheme.pallete.common.normalGrey} />}
    </StyledCard>
  );
};
