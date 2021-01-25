import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from "./Bubbles";

test("Fetches data and renders the bubbles", () => {
  render(<Bubbles></Bubbles>);
  const data = screen.getByText(/bubbles/i);
  expect(data).toBeInTheDocument();
  // Finish this test
});
