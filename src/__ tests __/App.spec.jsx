/* import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  let originalFetch;
  it("Renders App component", async () => {
    render(<App />);
    const h1 = await screen.getByText("Hi");
    expect(h1).toBeInTheDocument();

    const btn = await screen.findByTestId("btn");
    expect(screen.getByText("Hi")).toBeInTheDocument();
    fireEvent.click(await screen.findByTestId("btn"));
    expect(screen.getByText("Hi")).toBeInTheDocument();
  });
});
 */
