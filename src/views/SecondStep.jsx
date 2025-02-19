import React, { useState } from "react";
import Step from "../components/Step/Step";
import PassportDetails from "../components/PassportDetails/PassportDetails";
import BillingInformation from "../components/BillingInformation/BillingInformation";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";
import TravelDetails from "../components/TravelDetails/TravelDetails";

export default function SecondStep({ formData, setFormData, setStep }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    setLoading(true);
    setError(null);
  
    try {
      console.log("FORM DATA ❤️❤️❤️:" + JSON.stringify(formData))
      const response = await fetch("http://localhost:5000/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }
      console.log(data)
      if (data.url) {
        // window.location.href = data.url;
      } else {
        throw new Error("Stripe session URL not received.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectChange = (key, value, index = 0) => {
    setFormData((prev) => {
      let newFormData = { ...prev };

      if (key.startsWith("personalDetails")) {
        const [_, field] = key.split(".");
        newFormData.personalDetails = [...prev.personalDetails];
        newFormData.personalDetails[index][field] = value;
      } else if (key.startsWith("passportDetails")) {
        const [_, field] = key.split(".");
        newFormData.passportDetails = [...prev.passportDetails];
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
              title={`Personal details - pax ${formData.personalDetails[index].givenName || ''}`}
              index={index}
            />
            <PassportDetails
              key={`passport-${index}`}
              formData={formData}
              handleSelectChange={handleSelectChange}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              title={`Passport details - pax ${formData.personalDetails[index].givenName || ''}`}
              index={index}
            />
          </div>
        ))}
        <BillingInformation formData={formData} handleSelectChange={handleSelectChange} />
        
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {loading && <p>Submitting application...</p>}

        <button onClick={handleContinue} disabled={loading} className="primary">
          {loading ? "Submitting..." : "Continue to Payment"}
        </button>
      </div>
    </>
  );
}
