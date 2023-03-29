import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import DetailsForm from "./components/DetailsForm";
import { updateTimes, initializeTimes } from "./components/Details";
import Details from "./components/Details";
import Reserve from "./components/Reserve";

test("Renders the DetailsForm title", () => {
  render(
    <BrowserRouter>
      <DetailsForm />
    </BrowserRouter>
  );
  const inputElement = screen.getByLabelText("Party Size");
  expect(inputElement).toBeInTheDocument();
});

describe("Details component functionality", () => {
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

describe("DetailsForm Component attribute check", () => {
  test("party size input element has correct attributes", () => {
    render(
      <BrowserRouter>
        <DetailsForm />
      </BrowserRouter>
    );

    const partySizeInput = screen.getByLabelText("Party Size");
    expect(partySizeInput).toHaveAttribute("id", "party-select");
    expect(partySizeInput).toHaveAttribute(
      "class",
      expect.stringMatching(/^form-select/)
    );
    expect(partySizeInput).toHaveAttribute("name", "Party Size");
  });

  test("seating type input element has correct attributes", () => {
    render(
      <BrowserRouter>
        <DetailsForm />
      </BrowserRouter>
    );

    const seatingTypeInput = screen.getByLabelText("Seating Type");
    expect(seatingTypeInput).toHaveAttribute("id", "seating-select");
    expect(seatingTypeInput).toHaveAttribute(
      "class",
      expect.stringMatching(/^form-select/)
    );
    expect(seatingTypeInput).toHaveAttribute("name", "Seating Type");
  });

  test("date input element has correct attributes", () => {
    render(
      <BrowserRouter>
        <DetailsForm />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText("Date");
    expect(dateInput).toHaveAttribute("id", "date-select");
    expect(dateInput).toHaveAttribute(
      "class",
      expect.stringMatching(/^form-select/)
    );
    expect(dateInput).toHaveAttribute("name", "Date");
  });

  test("time input element has correct attributes", () => {
    render(
      <BrowserRouter>
        <DetailsForm />
      </BrowserRouter>
    );

    const timeInput = screen.getByLabelText("Time");
    expect(timeInput).toHaveAttribute("id", "time-select");
    expect(timeInput).toHaveAttribute(
      "class",
      expect.stringMatching(/^form-select/)
    );
    expect(timeInput).toHaveAttribute("name", "Time");
  });

  test("occasion input element has correct attributes", () => {
    render(
      <BrowserRouter>
        <DetailsForm />
      </BrowserRouter>
    );

    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).toHaveAttribute("id", "occasion-select");
    expect(occasionInput).toHaveAttribute(
      "class",
      expect.stringMatching(/^form-select/)
    );
    expect(occasionInput).toHaveAttribute("name", "Occasion");
  });
});

describe("Reserve Component attribute check", () => {
  test("Full Name input has correct attributes", () => {
    render(
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    );

    const fullNameInput = screen.getByLabelText("Full Name");
    expect(fullNameInput).toHaveAttribute("id", "inputName");
    expect(fullNameInput).toHaveAttribute(
      "class",
      expect.stringMatching(/^form-control/)
    );
    expect(fullNameInput).toHaveAttribute("name", "Full Name");
  });

  test("Email input has correct attributes", () => {
    render(
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText("Email Address");
    expect(emailInput).toHaveAttribute("id", "inputEmail");
    expect(emailInput).toHaveAttribute(
      "class",
      expect.stringMatching(/^form-control/)
    );
    expect(emailInput).toHaveAttribute("name", "Email Address");
  });

  test("Phone Number input has correct attributes", () => {
    render(
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    );

    const phoneInput = screen.getByLabelText("Phone Number");
    expect(phoneInput).toHaveAttribute("id", "inputPhoneNumber");
    expect(phoneInput).toHaveAttribute(
      "class",
      expect.stringMatching(/^form-control/)
    );
    expect(phoneInput).toHaveAttribute("name", "Phone Number");
  });
});

describe("test if validation works as expected in DetailsForm component", () => {
  test("validateForm detects invalid partySize", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Details>
          <DetailsForm />
        </Details>
      </BrowserRouter>
    );

    // Simulate an invalid input for the partySize field
    fireEvent.change(getByLabelText("Party Size"), { target: { value: "" } });

    // Submit the form and verify that an error message is displayed
    fireEvent.submit(getByText("Submit"));
    expect(getByText("Please select a party size")).toBeInTheDocument();
  });

  test("validateForm detects invalid seatingType", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Details>
          <DetailsForm />
        </Details>
      </BrowserRouter>
    );

    // Simulate an invalid input for the seatingType field
    fireEvent.change(getByLabelText("Seating Type"), { target: { value: "" } });

    // Submit the form and verify that an error message is displayed
    fireEvent.submit(getByText("Submit"));
    expect(getByText("Please select a seating type")).toBeInTheDocument();
  });

  test("validateForm detects invalid time", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Details>
          <DetailsForm />
        </Details>
      </BrowserRouter>
    );

    // Simulate an invalid input for the time field
    fireEvent.change(getByLabelText("Time"), { target: { value: "" } });

    // Submit the form and verify that an error message is displayed
    fireEvent.submit(getByText("Submit"));
    expect(getByText("Please select a time")).toBeInTheDocument();
  });

  test("validateForm detects invalid occasion", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Details>
          <DetailsForm />
        </Details>
      </BrowserRouter>
    );

    // Simulate an invalid input for the occasion field
    fireEvent.change(getByLabelText("Occasion"), { target: { value: "" } });

    // Submit the form and verify that an error message is displayed
    fireEvent.submit(getByText("Submit"));
    expect(getByText("Please select an occasion")).toBeInTheDocument();
  });
});

describe("test if validation works as expected in Reserve component", () => {
  test("validateForm detects invalid fullName", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    );

    // Simulate an invalid input for the partySize field
    fireEvent.change(getByLabelText("Full Name"), { target: { value: "" } });

    // Submit the form and verify that an error message is displayed
    fireEvent.submit(getByText("Reserve"));
    expect(getByText("Please add your name")).toBeInTheDocument();
  });

  test("validateForm detects invalid email", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    );

    // Simulate an invalid input for the partySize field
    fireEvent.change(getByLabelText("Email Address"), { target: { value: "" } });

    // Submit the form and verify that an error message is displayed
    fireEvent.submit(getByText("Reserve"));
    expect(getByText("Please add a valid email")).toBeInTheDocument();
  });

  test("validateForm detects invalid fullName", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    );

    // Simulate an invalid input for the partySize field
    fireEvent.change(getByLabelText("Phone Number"), { target: { value: "" } });

    // Submit the form and verify that an error message is displayed
    fireEvent.submit(getByText("Reserve"));
    expect(getByText("Please add your phone number")).toBeInTheDocument();
  });
});
