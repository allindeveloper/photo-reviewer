import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { useTheme } from "styled-components";

const StyledCard = styled.div`
  background-color: ${props => props.theme.pallete.common.offwhite};
  height: 70px;
  border-radius: 4px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.pallete.common.lightGrey};
`;
export function Card({ title, itemId }: { title: string; itemId: string }) {
  const appTheme = useTheme();

  return (
    <StyledCard
      role="button"
      style={{
        margin: "0 10px",
        width: "120px",
        userSelect: "none",
      }}
      tabIndex={0}
      className="card"
    >
      <FontAwesomeIcon size="4x" icon={faPlus} color={appTheme.pallete.common.normalGrey} />
    </StyledCard>
  );
}
