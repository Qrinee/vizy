import React, { useState } from "react";
import Step from "../components/Step/Step";
import PassportDetails from "../components/PassportDetails/PassportDetails";
import BillingInformation from "../components/BillingInformation/BillingInformation";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";
import TravelDetails from "../components/TravelDetails/TravelDetails";

export default function SecondStep() {
  const [formData, setFormData] = useState({
    numberOfTravelers: "1",
    personalDetails: [
      {
        gender: "",
        givenName: "",
        middleName: "",
        surName: "",
        dateOfBirth: "",
        countryOfBirth: "",
        nationality: "",
      },
    ],
    passportDetails: [
      {
        selectedOption: '',
        passportIssuingCountry: "",
        passportNumber: "",
        passportInssuranceDate: "",
        passportExpirationDate: "",
      },
    ],
    documentType: "",
    billingCountry: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (key, value, index = 0) => {
    setFormData((prev) => {
      let newFormData = { ...prev };

      if (key.startsWith("personalDetails")) {
        const [_, field] = key.split(".");
        newFormData.personalDetails = [...prev.personalDetails];
        if (!newFormData.personalDetails[index]) {
          newFormData.personalDetails[index] = {
            gender: "",
            givenName: "",
            middleName: "",
            surName: "",
            dateOfBirth: "",
            countryOfBirth: "",
            nationality: "",
          };
        }
        newFormData.personalDetails[index][field] = value;
      } else if (key.startsWith("passportDetails")) {
        const [_, field] = key.split(".");
        newFormData.passportDetails = [...prev.passportDetails];
        if (!newFormData.passportDetails[index]) {
          newFormData.passportDetails[index] = {
            selectedOption: '',
            passportIssuingCountry: "",
            passportNumber: "",
            passportInssuranceDate: "",
            passportExpirationDate: "",
          };
        }
        newFormData.passportDetails[index][field] = value;
      } else {
        newFormData[key] = value;
      }

      if (key === "numberOfTravelers") {
        const numberOfTravelers = parseInt(value, 10);
        newFormData.personalDetails = Array.from({ length: numberOfTravelers }, (_, i) =>
          newFormData.personalDetails[i] || {
            gender: "",
            givenName: "",
            middleName: "",
            surName: "",
            dateOfBirth: "",
            countryOfBirth: "",
            nationality: "",
          }
        );
        newFormData.passportDetails = Array.from({ length: numberOfTravelers }, (_, i) =>
          newFormData.passportDetails[i] || {
            passportIssuingCountry: "",
            passportNumber: "",
            passportInssuranceDate: "",
            passportExpirationDate: "",
          }
        );
      }

      return newFormData;
    });
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
        {formData.personalDetails.map((_, index) => (
          <div key={index}>
          <PersonalDetails
            key={`personal-${index}`}
            formData={formData}
            handleSelectChange={handleSelectChange}
            title={`Personal details - pax ${formData.personalDetails[index].givenName && formData.personalDetails[index].givenName}`}
            index={index}
          />
          <PassportDetails
            key={`passport-${index}`}
            formData={formData}
            handleSelectChange={handleSelectChange}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            title={`Passport details - pax ${formData.personalDetails[index].givenName && formData.personalDetails[index].givenName}`}
            index={index}
          />
        </div>
        ))}
        <BillingInformation formData={formData} handleSelectChange={handleSelectChange} />
      </div>
      <button className="primary" onClick={() => console.log(formData)}>LOG DATA</button>
    </>
  );
}