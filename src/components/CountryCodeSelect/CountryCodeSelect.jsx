import React, { useState } from "react";
import "./CountryCodeSelect.css";

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+48", country: "Poland" },
  { code: "+91", country: "India" },
];

const CountryCodeSelect = ({ onChange }) => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);

  const handleChange = (event) => {
    setSelectedCode(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="country-code-select">
      <select value={selectedCode} onChange={handleChange}>
        {countryCodes.map((item) => (
          <option key={item.code} value={item.code}>
            {item.code} ({item.country})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryCodeSelect;
