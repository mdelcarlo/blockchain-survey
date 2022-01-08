import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders survey element", () => {
  render(<App />);
  const element = screen.getByText(/survey/i);
  expect(element).toBeInTheDocument();
});
