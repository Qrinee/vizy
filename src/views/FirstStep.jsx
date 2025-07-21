import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import CheckBox from '../components/CheckBox/CheckBox';
import { useLocation } from 'react-router';
import TwoItemsLayout from './../layouts/Two-Items-Layout/TwoItemsLayout';
import UKETAInfoCard from '../components/UKETAInfoCard/UKETAInfoCard';
import ProgressSteps from '../components/ProgressSteps/ProgressSteps';

export default function FirstStep({ formData, setFormData, setStep }) {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { fromCountry } = location.state || {};

  const isVisaRequired = (countryCode) => countryCode !== 'GB';

  const handleNationalityChange = (countryCode) => {
    const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode);
    setFormData(prev => ({
      ...prev,
      nationality: countryCode,
      countryName: countryName || countryCode,
      visaRequired: isVisaRequired(countryCode),
    }));
  };

  useEffect(() => {
    if (fromCountry && !formData.nationality) {
      handleNationalityChange(fromCountry);
    } else if (!formData.nationality) {
      handleNationalityChange('US');
    }
  }, [fromCountry]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.visaType) newErrors.visaType = 'Visa type is required';
    if (!formData.arrivalDate) newErrors.arrivalDate = 'Arrival date is required';
    if (!formData.acceptation) newErrors.acceptation = 'You must accept the terms';
    return newErrors;
  };

  const handleFormSubmit = (e) => {
    if (e) e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    
    setStep(1);
  };

  return (
    <>
    <div style={{width: 'calc(500px + 20vw)', margin: '0 auto'}}>
      <ProgressSteps/>
    </div>
    <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', flexWrap: 'wrap'}}>
    
      <form onSubmit={handleFormSubmit} style={{ padding: '4vw' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Apply now for your United Kingdom ETA</h1>
        
        <div style={{ backgroundColor: '#e9f3ff', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <p>
            {formData.visaRequired ? (
              <span style={{ backgroundColor: '#cce0ff', color: '#003366', padding: '5px 10px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>
                Visa required
              </span>
            ) : (
              <span style={{ backgroundColor: '#d4f7dc', color: '#0a5c1a', padding: '5px 10px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>
                Visa not required
              </span>
            )}
            {formData.visaRequired 
              ? `You need a visa to travel to United Kingdom with a ${formData.countryName} passport.`
              : `You don't need a visa in United Kingdom with a ${formData.countryName} passport.`}
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>
            What's your nationality?
          </label>
          <ReactFlagsSelect
            selected={formData.nationality}
            onSelect={handleNationalityChange}
            searchable={true}
            placeholder="Select Nationality"
            className="flag-select"
            style={{ border: errors.nationality ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.nationality && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.nationality}</p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Applying for</label>
          <select
            name="visaType"
            value={formData.visaType || ''}
            onChange={handleChange}
            style={{ 
              border: errors.visaType ? '1px solid red' : '1px solid #ccc',
              borderRadius: '6px',
              padding: '10px',
              width: '100%',
              color: 'black'
            }}
          >
            <option value="">Select visa type</option>
            <option value="2 years">United Kingdom ETA - 2 years, Multiple entry</option>
            <option value="5 years">United Kingdom ETA - 5 years, Multiple entry</option>
          </select>
          {errors.visaType && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.visaType}</p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Arrival date</label>
          <input 
            type="date" 
            name="arrivalDate"
            value={formData.arrivalDate || ''}
            onChange={handleChange}
            style={{ 
              fontFamily: 'inherit',
              border: errors.arrivalDate ? '1px solid red' : '1px solid #ccc',
              borderRadius: '6px',
              padding: '10px',
              width: '100%'
            }}
          />
          {errors.arrivalDate && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.arrivalDate}</p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <CheckBox
            name="acceptation"
            checked={formData.acceptation || false}
            onChange={handleChange}
            label="I agree to the Terms and Conditions and Privacy Policy"
          />
          {errors.acceptation && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.acceptation}</p>
          )}
        </div>

        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '15px' }}>{error}</p>}
      </form>
      
      <div style={{margin: '20px'}}>
        <UKETAInfoCard 
          valid={formData.visaType}
          onSubmit={handleFormSubmit}
          loading={loading}
        />
      </div>
    </div>
    </>
  );
}