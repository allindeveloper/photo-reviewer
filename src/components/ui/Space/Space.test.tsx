import { render } from "@testing-library/react";
import { Space } from "./Space";

test("Renders Space Component correctly with correct top Property", () => {
  const { container } = render(<Space top={50} />);
  expect(container.firstChild).toHaveStyle(`margin-top:50px`);
});

test("Renders Space Component correctly with correct bottom Property", () => {
  const { container } = render(<Space bottom={90} />);
  expect(container.firstChild).toHaveStyle(`margin-bottom:90px`);
});
