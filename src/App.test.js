import { render, screen } from "@testing-library/react";
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
  test("initializeTimes function returns the correct expected value", () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );
    const expectedValue = [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
    ];
    const actualValue = initializeTimes();
    expect(actualValue).toEqual(expectedValue);
  });

  test("updateTimes function returns the same value that is provided in the state", () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );
    const initialState = [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
    ];
    const action = { type: "UPDATE_TIMES", payload: { date: "2023-03-22" } };
    const expectedValue = {
      times: initialState,
      date: action.payload.date,
    };
    const actualValue = updateTimes(
      { times: initialState, date: null },
      action
    );
    expect(actualValue).toEqual(expectedValue);
  });
});
