import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../../styles/theme";
import { IImage } from "../../../types/image";
import { setupIntersectionObserverMock } from "../../../utils/testUtils";
import ApprovedImages from "./ApprovedImages";

beforeEach(() => {
  setupIntersectionObserverMock();
});

it("Approved Images renders correctly when there are no items", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={myTheme}>
        <ApprovedImages approvedImages={[]} />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Approved Images correctly when there is a single approved Image", () => {
  const approvedImages: IImage[] = [
    {
      id: "JmFldiNGY18",
      description: "First Image",

      urls: {
        raw:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1",
        full:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
      },
    },
  ];
  const tree = renderer
    .create(
      <ThemeProvider theme={myTheme}>
        <ApprovedImages approvedImages={approvedImages} />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * check for the number of images shown 
   after clicking on approve button, then the approved images length should increase
 */

it("renders correctly when there are multiple items", () => {
  const approvedImages: IImage[] = [
    {
      id: "JmFldiNGY18",
      description: "First Image",
      urls: {
        raw:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1",
        full:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
      },
    },
    {
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
  ];
  const tree = renderer
    .create(
      <ThemeProvider theme={myTheme}>
        <ApprovedImages approvedImages={approvedImages} />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Approved Images Component should be of the same length to approvedImages array", async () => {
  const approvedImages: IImage[] = [
    {
      id: "JmFldiNGY18",
      description: "First Image",
      urls: {
        raw:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1",
        full:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1644585587551-85377778d375?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDA4MzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ3NTUzMjM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
      },
    },
    {
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
  ];
  const { getAllByTestId } = render(
    <ThemeProvider theme={myTheme}>
      <ApprovedImages approvedImages={approvedImages} />
    </ThemeProvider>,
  );

  expect(getAllByTestId("approvedImages")).toHaveLength(2);
});
