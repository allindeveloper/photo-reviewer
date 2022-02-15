import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useTheme } from "styled-components";
import CustomIcon from "../../ui/Icons/CustomIcon";

const arrowStyle = {
  cursor: "pointer",
  display: "flex",
  "justify-content": "center",
  right: "1%",
  "margin-right": "5px",
  "align-self": "center",
  "user-select": "none",
};

export const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators, initComplete } = React.useContext(
    VisibilityContext,
  );
  const appTheme = useTheme();
  const [disabled, setDisabled] = React.useState(!initComplete || (initComplete && isFirstItemVisible));
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <>
      {!disabled && (
        <CustomIcon
          style={arrowStyle}
          size={"2x"}
          color={appTheme.pallete.primary.main}
          onClick={() => scrollPrev()}
          icon={faAngleLeft}
        />
      )}
    </>
  );
};

export const RightArrow = () => {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } = React.useContext(VisibilityContext);
  const appTheme = useTheme();

  const [disabled, setDisabled] = React.useState(!visibleItemsWithoutSeparators.length && isLastItemVisible);
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <>
      {!disabled && (
        <CustomIcon
          style={{ ...arrowStyle, ...{ marginLeft: "5px" } }}
          size={"2x"}
          color={appTheme.pallete.primary.main}
          onClick={() => scrollNext()}
          icon={faAngleRight}
        />
      )}
    </>
  );
};
