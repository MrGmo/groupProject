import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title of app", () => {
  render(<App />);
  const title = screen.getByText(/find/i);
  expect(title).toBeInTheDocument();
});
