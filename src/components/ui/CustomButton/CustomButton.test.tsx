import { cleanup, render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../../styles/theme";
import { CustomButton } from "./CustomButton";

afterEach(cleanup);

it("Show X Icon if Button state is Cancel", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={myTheme}>
      <CustomButton state={"cancel"} />
    </ThemeProvider>,
  );

  expect(getByTestId("cancelButtonIcon")).toBeInTheDocument();
});

it("Show Check Icon if Button state is okay", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={myTheme}>
      <CustomButton state={"okay"} />
    </ThemeProvider>,
  );

  expect(getByTestId("checkButtonIcon")).toBeInTheDocument();
});

it("Cancel Button Should be have Brown background", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={myTheme}>
      <CustomButton state={"cancel"} />
    </ThemeProvider>,
  );

  expect(getByTestId("customButton")).toHaveStyle("background-color: #454545;");
});
