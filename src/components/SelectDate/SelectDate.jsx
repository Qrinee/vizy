import React, { useEffect } from "react";
import Select from "./../Select/Select";
import "./selectdate.css";

export default function SelectDate({
  label,
  required,
  bottomText,
  question,
  value,
  onChange,
}) {
  const dateParts = value ? value.split(".") : ["", "", ""];
  const [day, month, year] = dateParts;

  const handleChange = (newDay, newMonth, newYear) => {
    const formattedDate = `${newDay}.${newMonth}.${newYear}`;
    onChange(formattedDate);
  };

  return (
    <div className="data">
      <label>
        {label} {required && <span className="star">*</span>}
      </label>
      <div className="select-date">
        <Select
          value={day}
          onChange={(e) => handleChange(e.target.value, month, year)}
          options={[...Array(31).keys()].map((i) => (i + 1).toString())}
        />
        <Select
          value={month}
          onChange={(e) => handleChange(day, e.target.value, year)}
          options={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
        />
        <Select
          value={year}
          onChange={(e) => handleChange(day, month, e.target.value)}
          options={[...Array(new Date().getFullYear() - 1899).keys()].map((i) => (1900 + i).toString())}
        />
        {question && (
          <div className="question-container">
            <button className="question-mark">?</button>
            <p className="question">{question}</p>
          </div>
        )}
      </div>
      <p>{bottomText}</p>
    </div>
  );
}
