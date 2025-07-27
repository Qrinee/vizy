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
    
    formData.passportDetails.forEach((passport, index) => {
      if (!passport.nationality) {
        errors.push(`Traveler ${index + 1}: Nationality is required`);
      }
      
      if (!passport.addLater) {
        if (!passport.passportNumber) {
          errors.push(`Traveler ${index + 1}: Passport number is required`);
        }
        if (!passport.passportExpirationDate) {
          errors.push(`Traveler ${index + 1}: Passport expiration date is required`);
        }
      }
      
      if (passport.anotherNationalityExists === 'yes' && !passport.anotherNationality) {
        errors.push(`Traveler ${index + 1}: Other nationality is required`);
      }
    });
    
    return errors;
  };

    const handleContinue = (e) => {
    e.preventDefault();
    const errors = validateFormData();
    setValidationErrors(errors);
    
    if (errors.length === 0) {
      setStep(3); // Proceed to next step
    }
  };

const handleSelectChange = (key, value, index = 0) => {
  setFormData((prev) => {
    const newFormData = { ...prev };
    
    // Handle passportDetails updates
    if (key.startsWith("passportDetails")) {
      const [_, field] = key.split(".");
      
      // Ensure passportDetails array exists
      newFormData.passportDetails = [...(prev.passportDetails || [])];
      
      // Initialize object if needed
      if (!newFormData.passportDetails[index]) {
        newFormData.passportDetails[index] = {};
      }
      
      // Update the specific field
      newFormData.passportDetails[index] = {
        ...newFormData.passportDetails[index],
        [field]: value
      };
    } 
    // Handle other updates (if any)
    else {
      newFormData[key] = value;
    }
    
    return newFormData;
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
              onClick={handleContinue} 
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