import React, { useState } from "react";
import "./ProcessingOptions.css";

const options = [
  {
    id: 1,
    price: "zł267.10",
    label: "Standard - 24 hours processing",
  },
  {
    id: 2,
    price: "zł419.75",
    label: "Rush - 4 hours processing",
  },
  {
    id: 3,
    price: "zł572.40",
    label: "Super Rush - 1 hour processing",
  },
];

const ProcessingOptions = () => {
  const [selected, setSelected] = useState(1);

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
