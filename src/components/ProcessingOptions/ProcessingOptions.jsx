import React, { useState } from "react";
import "./ProcessingOptions.css";


const ProcessingOptions = ({ selected, setSelected }) => {
  const options = [
    {
      id: 1,
      price: "89.99 USD",
      label: "Standard - 24 hours processing",
    },
    {
      id: 2,
      price: "139.99 USD",
      label: "Rush - 4 hours processing",
    },
    {
      id: 3,
      price: "179.99 USD",
      label: "Super Rush - 1 hour processing",
    },
  ];

  return (
    <div className="processing-options">
      {options.map((option) => (
        <div
          key={option.id}
          className={`option ${selected === option.id ? "selected" : ""}`}
          onClick={() => setSelected(option.id)}
        >
          <div className="price">{option.price}</div>
          <div className="label">{option.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProcessingOptions;
