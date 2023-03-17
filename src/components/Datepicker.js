import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="form-group row mb-3">
      <div className="col mx-3">
        <label htmlFor="select" className="form-label date-select">
          Date
        </label>
      </div>
      <div className="col-4 mx-3">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a Date"
          className="form-select date-select" 
          calendarClassName="custom-calendar"
        />
      </div>
    </div>
  );
};

export default Datepicker;
