import React, { useState } from "react";
import Step from "../components/Step/Step";
import PassportDetails from "../components/PassportDetails/PassportDetails";
import BillingInformation from "../components/BillingInformation/BillingInformation";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";
import TravelDetails from "../components/TravelDetails/TravelDetails";
import { useLanguage } from "../context/LanguageContext";

export default function SecondStep({ formData, setFormData, setStep }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const { t } = useLanguage();

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
        
        // Handle invalid numbers
        if (isNaN(numberOfTravelers)) {
          newFormData.numberOfTravelers = prev.numberOfTravelers;
          return newFormData;
        }

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
        
        // Store as number instead of string
        newFormData.numberOfTravelers = numberOfTravelers;
      }

      return newFormData;
    });
  };

const handleAddTraveler = () => {
  setFormData(prev => {
    // Zapewniamy, że numberOfTravelers jest liczbą
    const currentNumberOfTravelers = parseInt(prev.numberOfTravelers, 10) || 0;
    const newNumberOfTravelers = currentNumberOfTravelers + 1;
    
    return {
      ...prev,
      numberOfTravelers: newNumberOfTravelers,
      personalDetails: [
        ...prev.personalDetails,
        {
          gender: "",
          givenName: "",
          middleName: "",
          surName: "",
          dateOfBirth: "",
          countryOfBirth: "",
          nationality: "",
        }
      ],
      passportDetails: [
        ...prev.passportDetails,
        {
          passportIssuingCountry: "",
          passportNumber: "",
          passportInssuranceDate: "",
          passportExpirationDate: "",
        }
      ]
    };
  });
};

const handleRemoveTraveler = (index) => {
  // Zapewniamy, że numberOfTravelers jest liczbą
  const currentNumberOfTravelers = parseInt(formData.numberOfTravelers, 10) || 0;
  if (currentNumberOfTravelers <= 1) return; // Don't remove the last traveler
  
  setFormData(prev => {
    const newPersonalDetails = [...prev.personalDetails];
    const newPassportDetails = [...prev.passportDetails];
    
    newPersonalDetails.splice(index, 1);
    newPassportDetails.splice(index, 1);

    return {
      ...prev,
      numberOfTravelers: currentNumberOfTravelers - 1,
      personalDetails: newPersonalDetails,
      passportDetails: newPassportDetails
    };
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
      console.log("FORM DATA:", JSON.stringify(formData));
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
        <Step number={1} title={"Trip details"}  />
        <Step number={2} title={"Your info"} active={true} />
        <Step number={3} title={"Checkout"} />
      </div>
      <div className="content-layout">
        {formData.personalDetails.map((_, index) => (
          <div key={index} className="traveler-section" style={{ position: "relative" }}>
     
            
            <PersonalDetails
              formData={formData}
              handleSelectChange={handleSelectChange}
              title={`Traveler #${index + 1}`}
              index={index}
            />

       {index > 0 && (
              <button 
                type="button"
                onClick={() => handleRemoveTraveler(index)}
                className="removetraveler"
              >
                <span style={{ fontSize: "14px", marginRight: 8 }}>✕</span>
                Remove Traveler {index + 1}
              </button>
            )}

          </div>
        ))}

        <button 
          type="button"
          onClick={handleAddTraveler}
          className="addtraveler"
        >
          + Add Traveler
        </button>

        {validationErrors.length > 0 && (
          <div style={{ 
            backgroundColor: "#ffebee",
            padding: "15px",
            borderRadius: "4px",
            marginBottom: "20px"
          }}>
            <h4 style={{ color: "#d32f2f", marginTop: 0 }}>Please fix the following errors:</h4>
            <ul style={{ color: "#d32f2f", paddingLeft: "20px", marginBottom: 0 }}>
              {validationErrors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {error && (
          <div style={{ 
            backgroundColor: "#ffebee",
            color: "#d32f2f",
            padding: "15px",
            borderRadius: "4px",
            marginBottom: "20px"
          }}>
            Error: {error}
          </div>
        )}

        {loading && (
          <div style={{ 
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px"
          }}>
            <div className="spinner"></div>
            <span>Submitting application...</span>
          </div>
        )}

        <button 
          style={{
            margin: 'auto', 
            display: 'block', 
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#1976d2',
            color: 'black',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            minWidth: '250px'
          }} 
          onClick={handleContinue} 
          disabled={loading} 
          className='submit-btn'
        >
          {loading ? t.submitting : t.continue_to_payment}
        </button>
      </div>
    </>
  );
}