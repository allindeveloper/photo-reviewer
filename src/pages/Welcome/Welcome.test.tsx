import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { initState } from "../../redux/reducers/imageReducer";
import { myTheme } from "../../styles/theme";
import Welcome from "./Welcome";

const mockConfig = {
  randomImage: {
    id: "sNS-uuP01hE",
    description: "Second Image",

    urls: {
      raw:
        "https://images.unsplash.com/photo-1644520755723-868f336428c6?ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTU1MzQ\u0026ixlib=rb-1.2.1",
      full:
        "https://images.unsplash.com/photo-1644520755723-868f336428c6?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTU1MzQ\u0026ixlib=rb-1.2.1\u0026q=85",
      regular:
        "https://images.unsplash.com/photo-1644520755723-868f336428c6?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTU1MzQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
      small:
        "https://images.unsplash.com/photo-1644520755723-868f336428c6?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTU1MzQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
      thumb:
        "https://images.unsplash.com/photo-1644520755723-868f336428c6?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTU1MzQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
    },
  },
  getRandomImage: jest.fn(),
  loading: false,
};
const mockStore = (
  state = {
    imageReducer: initState,
  },
) => configureMockStore()(state);

jest.mock("../../hooks/useGetRandomImage", () => {
  return {
    __esModule: true,
    default: () => ({
      ...mockConfig,
    }),
  };
});
beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

it("Welcome Component Renders Correctly", () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        {" "}
        <Welcome />
      </ThemeProvider>
    </Provider>,
  );
});

it("Plus Icon was Clicked and Image was Rendered", () => {
  const { getByTestId, getByRole } = render(
    <Provider
      store={mockStore({
        imageReducer: initState,
      })}
    >
      <ThemeProvider theme={myTheme}>
        {" "}
        <Welcome />
      </ThemeProvider>
    </Provider>,
  );
  const plusIcon = getByTestId("getRandomImage");
  fireEvent.click(plusIcon);
  expect(getByRole("img")).toHaveAttribute("src", mockConfig.randomImage.urls.regular);
});

it("Approve Button was Clicked and Image was Rendered", async () => {
  const { getByTestId, getByRole } = render(
    <Provider
      store={mockStore({
        imageReducer: initState,
      })}
    >
      <ThemeProvider theme={myTheme}>
        {" "}
        <Welcome />
      </ThemeProvider>
    </Provider>,
  );
  const approveButton = getByTestId("approveButton");

  fireEvent.click(approveButton);
  expect(getByTestId("imagePreview")).toHaveAttribute("src", mockConfig.randomImage.urls.regular);
  expect(getByTestId("imagePreview")).toHaveAttribute("alt", mockConfig.randomImage.description);
});
