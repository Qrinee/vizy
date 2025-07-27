import React, { useState } from "react";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";
import { useLanguage } from "../context/LanguageContext";
import ESTASummary from './../components/EstaSummary/ESTASummary';
import ProgressSteps from './../components/ProgressSteps/ProgressSteps';
import { FaPerson } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import PassportDetails from "../components/PassportDetails/PassportDetails";
import ReactFlagsSelect from "react-flags-select";

export default function ThirdStep({ formData, setFormData, setStep }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const { t } = useLanguage();

  const validateFormData = () => {
    const errors = [];

    // Walidacja liczby podróżnych
    if (!formData.numberOfTravelers || formData.numberOfTravelers < 1) {
      errors.push("At least one traveler is required.");
    }

    // Walidacja danych każdego podróżnego
    formData.personalDetails.forEach((pax, index) => {
      if (!pax.givenName) errors.push(`Traveler ${index + 1}: First name is required.`);
      if (!pax.surName) errors.push(`Traveler ${index + 1}: Last name is required.`);
      if (!pax.dateOfBirth) errors.push(`Traveler ${index + 1}: Date of birth is required.`);
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
      } else {
        newFormData[key] = value;
      }

      if (key === "numberOfTravelers") {
        const numberOfTravelers = parseInt(value, 10);
        
        if (isNaN(numberOfTravelers)) {
          newFormData.numberOfTravelers = prev.numberOfTravelers;
          return newFormData;
        }

        newFormData.personalDetails = Array.from({ length: numberOfTravelers }, (_, i) =>
          newFormData.personalDetails[i] || {
            givenName: "",
            middleName: "",
            surName: "",
            dateOfBirth: "",
          }
        );
        
        newFormData.numberOfTravelers = numberOfTravelers;
      }

      return newFormData;
    });
  };

  const handleAddTraveler = () => {
    setFormData(prev => {
      const currentNumberOfTravelers = parseInt(prev.numberOfTravelers, 10) || 0;
      const newNumberOfTravelers = currentNumberOfTravelers + 1;
      
      return {
        ...prev,
        numberOfTravelers: newNumberOfTravelers,
        personalDetails: [
          ...prev.personalDetails,
          {
            givenName: "",
            middleName: "",
            surName: "",
            dateOfBirth: "",
          }
        ]
      };
    });
  };

  const handleRemoveTraveler = (index) => {
    const currentNumberOfTravelers = parseInt(formData.numberOfTravelers, 10) || 0;
    if (currentNumberOfTravelers <= 1) return;
    
    setFormData(prev => {
      const newPersonalDetails = [...prev.personalDetails];
      newPersonalDetails.splice(index, 1);

      return {
        ...prev,
        numberOfTravelers: currentNumberOfTravelers - 1,
        personalDetails: newPersonalDetails
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
      <div style={{maxWidth: '1312px', margin: 'auto'}}>
        <ProgressSteps step={3}/>
      </div>
      <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1312px'}}>
        <div>
          <div className="content-layout">
            <h2>Your personal details</h2>
            <p style={{fontSize: '17px', fontWeight: '500'}}>These should match what's in your passport.</p>
            
            {formData.personalDetails.map((_, index) => (
              <div key={index} className="traveler-section" style={{ position: "relative" }}>
                <PassportDetails
                  formData={formData}
                  handleSelectChange={handleSelectChange}
                  title={`Traveler #${index + 1}`}
                  index={index}
                />

              </div>
            ))}



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
          </div>
        </div>
        
        <div style={{margin: '20px'}}>
          <ESTASummary traveler={formData.numberOfTravelers || 1} total={'22.89 USD'}/>
          <div className="mobile-down">
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
                bottom: '0',
                zIndex: '999',
                fontWeight: 'bold',
                width: '100%'
              }} 
              onClick={() => setStep(3)} 
              disabled={loading} 
              className='submit-btn'
            >
              {loading ? t.submitting : "Save and continue"}
            </button>
          </div>
          <div style={{marginTop: '20px', paddingLeft: '10px'}}>
            <p style={{color: 'rgb(11 57 71)'}}><FaPerson/> We take strong measures to protect your information</p>
            <p style={{fontWeight: '500', margin: '0'}}>For more details see how we keep your data safe</p>
          </div>
          <div onClick={() => setStep(1)} style={{marginTop: '30px', cursor: 'pointer', paddingLeft: '10px', color: 'rgb(57, 79, 225)'}}>
            <FaArrowLeft style={{marginBottom: '-2px', marginRight: '5px'}}/> Previous
          </div>
        </div>
      </div>
    </>
  );
}