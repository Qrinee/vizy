import React, { useState } from "react";
import Step from "../components/Step/Step";
import PassportDetails from "../components/PassportDetails/PassportDetails";
import BillingInformation from "../components/BillingInformation/BillingInformation";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";
import TravelDetails from "../components/TravelDetails/TravelDetails";
import { useLanguage } from "../context/LanguageContext";

export default function SecondStep({ formData, setFormData, setStep }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const {t} = useLanguage()

  const validateFormData = () => {
    const errors = [];

    if (!formData.numberOfTravelers || formData.numberOfTravelers < 1) {
      errors.push("At least one traveler is required.");
    }

    formData.personalDetails.forEach((pax, index) => {
      if (!pax.givenName) errors.push(`Traveler ${index + 1}: Given name is required.`);
      if (!pax.surName) errors.push(`Traveler ${index + 1}: Surname is required.`);
      if (!pax.dateOfBirth) errors.push(`Traveler ${index + 1}: Date of birth is required.`);
      if (!pax.nationality) errors.push(`Traveler ${index + 1}: Nationality is required.`);
    });

    formData.passportDetails.forEach((passport, index) => {
      if (!passport.passportIssuingCountry) errors.push(`Traveler ${index + 1}: Passport issuing country is required.`);
    });

    return errors;
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

  const handleContinue = async () => {
    setError(null);
    setValidationErrors([]);
    const errors = validateFormData();

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setLoading(true);
    try {
      console.log("FORM DATA ❤️❤️❤️:", JSON.stringify(formData));
      const response = await fetch("https://api.govguide.co/api/application", {
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
        <Step number={1} title={t.submit_application_online} active={true} />
        <Step number={2} title={t.review_and_confirm_payment} />
        <Step number={3} title={t.receive_approved_visa} />
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
        
        {validationErrors.length > 0 && (
          <ul style={{ color: "red" }}>
            {validationErrors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {loading && <p>Submitting application...</p>}

        <button style={{margin: 'auto', display: 'block', marginTop: '20px'}} onClick={handleContinue} disabled={loading} className="primary">
          {loading ? t.submitting : t.continue_to_payment}
        </button>
      </div>
    </>
  );
}
