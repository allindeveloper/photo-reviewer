import { cleanup, render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../../styles/theme";
import ImagePreview from "./ImagePreview";

afterEach(cleanup);

it("Show Preloader when isLoading", () => {
  const getRandomImage = () => {};
  const { getByTestId } = render(
    <ThemeProvider theme={myTheme}>
      <ImagePreview isLoading={true} getRandomImage={getRandomImage} description={"Preview Image"} />
    </ThemeProvider>,
  );

  expect(getByTestId("imagePreloader")).toBeInTheDocument();
});

it("Render Image when isLoading is false and imageUrl Exists", () => {
  const getRandomImage = () => {};
  const { getByTestId } = render(
    <ThemeProvider theme={myTheme}>
      <ImagePreview
        isLoading={false}
        getRandomImage={getRandomImage}
        imageUrl={
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"
        }
      />
    </ThemeProvider>,
  );

  expect(getByTestId("image")).toBeInTheDocument();
});

it("Image Preview Shows Plus Icon on Load", () => {
  const getRandomImage = () => {};
  const { getByTestId } = render(
    <ThemeProvider theme={myTheme}>
      <ImagePreview isLoading={false} getRandomImage={getRandomImage} />
    </ThemeProvider>,
  );

  expect(getByTestId("imagePlus")).toBeInTheDocument();
});
