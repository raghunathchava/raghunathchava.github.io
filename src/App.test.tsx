import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("renders without crashing", () => {
    render(<div>Raghunath Chava Website</div>);
    expect(screen.getByText("Raghunath Chava Website")).toBeInTheDocument();
  });
});
