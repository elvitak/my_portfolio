import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Footer.jsx", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("is expected to dispaly footer message", () => {
    expect(
      screen.getByText(`Made with React ${React.version}`)
    ).toBeInTheDocument();
  });
});
