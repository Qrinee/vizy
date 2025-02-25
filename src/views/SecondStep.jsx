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
  const [validationErrors, setValidationErrors] = useState([]);

  const validateForm = () => {
    const errors = [];
    
    if (!formData.travelDate) {
      errors.push("Travel date is required.");
    }
    if (!formData.numberOfTravelers || formData.numberOfTravelers <= 0) {
      errors.push("Number of travelers must be at least 1.");
    }

    formData.personalDetails.forEach((person, index) => {
      if (!person.givenName) errors.push(`Given name is required for traveler ${index + 1}`);
      if (!person.surName) errors.push(`Surname is required for traveler ${index + 1}`);
      if (!person.dateOfBirth) errors.push(`Date of birth is required for traveler ${index + 1}`);
      if (!person.nationality) errors.push(`Nationality is required for traveler ${index + 1}`);
    });

    formData.passportDetails.forEach((passport, index) => {
      if (!passport.passportIssuingCountry) errors.push(`Passport issuing country is required for traveler ${index + 1}`);
      if (!passport.passportNumber) errors.push(`Passport number is required for traveler ${index + 1}`);
      if (!passport.passportExpirationDate) errors.push(`Passport expiration date is required for traveler ${index + 1}`);
    });
    
    if (!formData.billingAddress) {
      errors.push("Billing address is required.");
    }
    if (!formData.email) {
      errors.push("Email is required.");
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleContinue = async () => {
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      console.log("FORM DATA ❤️❤️❤️:" + JSON.stringify(formData));
      const response = await fetch("https://backend-2plk.onrender.com/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Stripe session URL not received.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
        <TravelDetails formData={formData} handleSelectChange={() => {}} />
        {formData.personalDetails.map((_, index) => (
          <div key={index}>
            <PersonalDetails
              key={`personal-${index}`}
              formData={formData}
              handleSelectChange={() => {}}
              title={`Personal details - pax ${formData.personalDetails[index].givenName || ''}`}
              index={index}
            />
            <PassportDetails
              key={`passport-${index}`}
              formData={formData}
              handleSelectChange={() => {}}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              title={`Passport details - pax ${formData.personalDetails[index].givenName || ''}`}
              index={index}
            />
          </div>
        ))}
        <BillingInformation formData={formData} handleSelectChange={() => {}} />
        
        {validationErrors.length > 0 && (
          <ul style={{ color: "red" }}>
            {validationErrors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {loading && <p>Submitting application...</p>}

        <button onClick={handleContinue} disabled={loading} className="primary">
          {loading ? "Submitting..." : "Continue to Payment"}
        </button>
      </div>
    </>
  );
}
