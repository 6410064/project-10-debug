import React from "react";
import { render } from "@testing-library/react";
import Logo from ".";

describe("Logo Component", () => {
  it("renders correctly with the default size", () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with a large size", () => {
    const { container } = render(<Logo size="large" />);
    expect(container).toMatchSnapshot();
  });
});