import React, { useState } from "react";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";
import { useLanguage } from "../context/LanguageContext";
import ESTASummary from './../components/EstaSummary/ESTASummary';
import ProgressSteps from './../components/ProgressSteps/ProgressSteps';
import { FaPerson } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

export default function SecondStep({ formData, setFormData, setStep }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const { t } = useLanguage();

const handleSelectChange = (key, value, index = 0) => {
  setFormData((prev) => {
    const newFormData = JSON.parse(JSON.stringify(prev));
    
    if (key.includes("personalDetails")) {
      const [_, field] = key.split(".");
      newFormData.personalDetails[index][field] = value;
    } 
    else if (key === "numberOfTravelers") {
      const numberOfTravelers = parseInt(value, 10);
      
      if (!isNaN(numberOfTravelers)) {
        newFormData.personalDetails = Array.from(
          { length: numberOfTravelers },
          (_, i) => newFormData.personalDetails[i] || {
            firstAndMiddleName: "",
            lastName: "",
            dateOfBirth: "",
          }
        );
        newFormData.numberOfTravelers = numberOfTravelers.toString();
      }
    } 
    else {
      newFormData[key] = value;
    }

    return newFormData;
  });
};

const handleContinue = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  
  // Validate the form
  const errors = validateFormData();
  
  if (errors.length > 0) {
    setValidationErrors(errors);
    return; // Stop if there are errors
  }

  setLoading(true);
  try {
    console.log("Valid form data:", formData);
    // Proceed to next step if validation passes
    setStep(2); // Or whatever your next step number is
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

const handleAddTraveler = () => {
  setFormData(prev => ({
    ...prev,
    numberOfTravelers: (parseInt(prev.numberOfTravelers, 10) + 1).toString(),
    personalDetails: [
      ...prev.personalDetails,
      {
        firstAndMiddleName: "",
        lastName: "",
        dateOfBirth: "",
      }
    ]
  }));
};

const validateFormData = () => {
  const errors = [];
  formData.personalDetails.forEach((pax, index) => {
    if (!pax.firstAndMiddleName) errors.push(`Traveler ${index + 1}: First name is required.`);
    if (!pax.lastName) errors.push(`Traveler ${index + 1}: Last name is required.`);
    if (!pax.dateOfBirth) errors.push(`Traveler ${index + 1}: Date of birth is required.`);
  });
  return errors;
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
              + Add another Traveler
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
              onClick={(e) => handleContinue(e)} 
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
          <div onClick={() => setStep(0)} style={{marginTop: '30px', cursor: 'pointer', paddingLeft: '10px', color: 'rgb(57, 79, 225)'}}>
            <FaArrowLeft style={{marginBottom: '-2px', marginRight: '5px'}}/> Previous
          </div>
        </div>
      </div>
    </>
  );
}