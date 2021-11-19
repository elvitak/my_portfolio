import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

describe("About.jsx", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("is expected to dispaly About Me header", () => {
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });
});
