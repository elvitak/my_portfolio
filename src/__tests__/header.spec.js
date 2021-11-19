import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "../Header";
import { BrowserRouter } from "react-router-dom";

describe("Header.jsx", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HeaderComponent fullName={"FakeFullName"} />
      </BrowserRouter>
    );
  });

  it("is expected to dispaly FakeFullName in the Header", () => {
    expect(
      screen.getByText("Welcome to Portfolio of FakeFullName")
    ).toBeInTheDocument();
  });

  it("is expected to dispaly About Me menu item", () => {
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("is expected to dispaly CV menu item", () => {
    expect(screen.getByText("CV")).toBeInTheDocument();
  });

  it("is expected to dispaly My Projects menu item", () => {
    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });
});
