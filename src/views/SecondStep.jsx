import React, { useState } from "react";
import Step from "../components/Step/Step";
import PassportDetails from "../components/PassportDetails/PassportDetails";
import BillingInformation from "../components/BillingInformation/BillingInformation";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";
import TravelDetails from '../components/TravelDetails/TravelDetails'

export default function SecondStep() {
  const [formData, setFormData] = useState({ 
    numberOfTravelers: "",
    documentType: "",
    gender: "",
    countryOfBirth: "",
    nationality: "",
    passportIssuingCountry: "",
    billingCountry: "",
  });

  const [selectedOption, setSelectedOption] = useState("");
  const [forms, setForms] = useState([]);

  const handleSelectChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === "numberOfTravelers") {
      const numberOfTravelers = parseInt(value - 1, 10);
      const newForms = Array.from({ length: numberOfTravelers }, (_, index) => (
        <>
          <PersonalDetails
            key={`personal-${index}`}
            formData={formData}
            handleSelectChange={handleSelectChange}
            title={`Personal details - pax ${index + 1}`}
          />
          <PassportDetails
            key={`passport-${index}`}
            formData={formData}
            handleSelectChange={handleSelectChange}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            title={`Passport details - pax ${index + 1}`}
          />
        </>
      ));

      setForms(newForms);
    }
  };

  return (
    <>
      <div className="steps">
        <Step number={1} title="Submit Application Online" active={true} />
        <Step number={2} title="Review and Confirm Payment" />
        <Step number={3} title="Receive Approved Visa" />
      </div>
      <div className="content-layout">

        <TravelDetails formData={formData} handleSelectChange={handleSelectChange} />
        <PersonalDetails
          formData={formData}
          handleSelectChange={handleSelectChange}
          title={"Personal details - pax 1: Krystian Niemczyk"}
        />
        <PassportDetails
          formData={formData}
          handleSelectChange={handleSelectChange}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          title={"Passport details - pax Krystian Niemczyk"}
        />
        {forms}
        <BillingInformation formData={formData} handleSelectChange={handleSelectChange} />
      </div>
    </>
  );
}