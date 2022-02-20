import { render, screen } from "@testing-library/react";
import ShoppingListPage from "./ShoppingListPage";

test("renders 'my shopping list'", () => {
  render(<ShoppingListPage />);
  const title = screen.getByText(/My Shopping List/i);
  expect(title).toBeInTheDocument();
});
