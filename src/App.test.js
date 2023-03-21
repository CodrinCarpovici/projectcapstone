import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DetailsForm from "./components/DetailsForm";
import { updateTimes, initializeTimes } from "./components/Details";
import Details from "./components/Details";

test("Renders the DetailsForm title", () => {
  render(
    <BrowserRouter>
      <DetailsForm />
    </BrowserRouter>
  );
  const inputElement = screen.getByLabelText("Party Size");
  expect(inputElement).toBeInTheDocument();
});

describe("Details component", () => {
  test("initializeTimes function returns the correct expected value", async () => {
    await act(async () => {
        render(
          <BrowserRouter>
            <Details />
          </BrowserRouter>
        );
      });
    const expectedValue = expect.arrayContaining([
      expect.stringMatching(/^\d{1,2}:\d{2}$/),
    ]);
    const actualValue = await initializeTimes();
    expect(actualValue).toEqual(expectedValue);
  });

  test("updateTimes function returns the same value that is provided in the state", async () => {
    await act(async () => {
        render(
          <BrowserRouter>
            <Details />
          </BrowserRouter>
        );
      });
    const initialState = await initializeTimes();
    const action = { type: "UPDATE_TIMES", payload: { times: initialState } };
    const expectedValue = expect.arrayContaining([
      expect.stringMatching(/^\d{1,2}:\d{2}$/),
    ]);
    const actualValue = updateTimes(
      { times: initialState, date: null },
      action
    );
    expect(actualValue).toEqual(expectedValue);
  });
});
