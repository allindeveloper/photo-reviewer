import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useTheme } from "styled-components";
import CustomIcon from "../../ui/Icons/CustomIcon";

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
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            right: "1%",
            marginRight: "5px",
            alignSelf: "center",
            userSelect: "none",
          }}
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
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            right: "1%",
            marginLeft: "5px",
            alignSelf: "center",
            userSelect: "none",
          }}
          size={"2x"}
          color={appTheme.pallete.primary.main}
          onClick={() => scrollNext()}
          icon={faAngleRight}
        />
      )}
    </>
  );
};
