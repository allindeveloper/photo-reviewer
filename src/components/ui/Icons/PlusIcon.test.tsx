import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../../styles/theme";
import PlusIcon from "./PlusIcon";

it("Render Plus Icon Correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={myTheme}>
      <PlusIcon />
    </ThemeProvider>,
  );

  expect(getByTestId("plusIcon")).toBeInTheDocument();
});
