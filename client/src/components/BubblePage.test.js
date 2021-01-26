import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from "./Bubbles";

import { axiosWithAuth as mockaxiosWithAuth } from "../utils/axiosWithAuth";
jest.mock("../utils/axiosWithAuth");

const newBubbles = [
  { code: { hex: "#DAF7A6" }, color: "greenishh", id: 1 },
  { code: { hex: "#FFC300" }, color: "yellowishhh", id: 2 },
];

test("Fetches data and renders the bubbles", async () => {
  mockaxiosWithAuth.mockResolvedValue(newBubbles);
  render(<BubblePage />);

  const bubbles = screen.findByText(/bubble/i);
  expect(await bubbles).toBeInTheDocument();
});