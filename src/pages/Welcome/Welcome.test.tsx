import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/theme";
import Welcome from "./Welcome";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("Welcome Component", () => {
  describe("when rendered", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={myTheme}>
          {" "}
          <Welcome />
        </ThemeProvider>
      </Provider>,
    );
    const element = screen.getByTestId("getRandomImage");
    fireEvent.click(element);

    it("Approve Button should be called", () => {
      expect(element).toBeTruthy();
    });
  });
});

it("Init Welcome Component", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        {" "}
        <Welcome />
      </ThemeProvider>
    </Provider>,
  );

  expect(getByTestId("welcomeEmpty")).toBeInTheDocument();
});

it("Approve Button was Clicked", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        {" "}
        <Welcome />
      </ThemeProvider>
    </Provider>,
  );
  const approveButton = getByTestId("approveImage");

  fireEvent.click(approveButton);
});
