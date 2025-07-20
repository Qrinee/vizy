import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import InfoBox from '../components/InfoBox/InfoBox';
import Input from '../components/Input/Input';
import CheckBox from '../components/CheckBox/CheckBox';
import CountryCodeSelect from '../components/CountryCodeSelect/CountryCodeSelect';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router';

export default function FirstStep({ formData, setFormData, setStep }) {
  const { t } = useLanguage();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    const location = useLocation();
  const { fromCountry, toCountry, fromLabel, toLabel } = location.state || {};
  
  // Funkcja do określania czy wymagana jest wiza
  const isVisaRequired = (countryCode) => {
    return countryCode !== 'GB'; // Tylko UK nie wymaga wizy
  };
  const handleNationalityChange = (countryCode) => {
    // Pobierz nazwę kraju z komponentu ReactFlagsSelect
    const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode);
    
    setFormData(prev => ({
      ...prev,
      nationality: countryCode, // Changed from toCountry to countryCode
      countryName: countryName || countryCode,
      visaRequired: isVisaRequired(countryCode),
    }));
  };

  // Ustaw domyślny kraj przy pierwszym renderowaniu
  useEffect(() => {
    if (!formData.nationality) {
      handleNationalityChange('US'); // Domyślnie USA
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


    useEffect(() => {
    if (fromCountry && !formData.nationality) {
      handleNationalityChange(fromCountry);
    } else if (!formData.nationality) {
      handleNationalityChange('US'); // Fallback to US if no fromCountry
    }
  }, [fromCountry]);


  const validateForm = () => {
    const newErrors = {};
    if (!formData.nationality) newErrors.nationality = t.nationality_required;
    if (!formData.contactName.trim()) newErrors.contactName = t.contact_name_is_required;
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = t.phone_number_is_required;
    if (!formData.emailAddress.trim()) newErrors.emailAddress = t.email_address_is_required;
    if (formData.emailAddress !== formData.confirmEmail) newErrors.confirmEmail = t.emails_do_not_match;
    if (!formData.acceptation) newErrors.acceptation = t.must_accept_terms;
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);

    try {
      const response = await fetch('https://api.govguide.co/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to submit application');
      if (data.url) window.location.href = data.url;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Pobierz nazwę aktualnie wybranego kraju
  const getCountryName = (code) => {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code) || code;
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Information Section */}
      <div style={{ backgroundColor: '#e9f3ff', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px' }}>Apply now for your United Kingdom ETA</h1>
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
            ? `You need a visa to travel to United Kingdom if you have a passport from ${formData.countryName}.`
            : `You don't need a visa in United Kingdom with ${formData.countryName} passport.`}
        </p>
      </div>

      {/* Nationality Selection */}
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
        
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
          {formData.nationality && (
            <>
              <img 
                src={`https://flagcdn.com/24x18/${formData.nationality.toLowerCase()}.png`} 
                alt={formData.countryName} 
                style={{ width: '24px', height: '18px', marginRight: '10px' }} 
              />
              <span>{formData.countryName || getCountryName(formData.nationality)}</span>
            </>
          )}
        </div>
        
        {errors.nationality && (
          <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
            {errors.nationality}
          </p>
        )}
        
        <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
          Ensure you select the nationality of the passport you'll be traveling with.
        </p>
      </div>

      {/* Visa Type Selection */}
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
          <option value="ETA-2YR">United Kingdom ETA - 2 years, Multiple entry</option>
          <option value="ETA-5YR">United Kingdom ETA - 5 years, Multiple entry</option>
        </select>
        {errors.visaType && (
          <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
            {errors.visaType}
          </p>
        )}
      </div>


      {/* Terms and Conditions */}
      <div style={{ marginBottom: '20px' }}>
        <CheckBox
          name="acceptation"
          checked={formData.acceptation || false}
          onChange={handleChange}
          label="I agree to the Terms and Conditions and Privacy Policy"
        />
        {errors.acceptation && (
          <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
            {errors.acceptation}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        style={{
          backgroundColor: '#00cc88',
          color: 'white',
          fontWeight: 'bold',
          padding: '15px 25px',
          borderRadius: '8px',
          border: 'none',
          marginTop: '20px',
          width: '100%',
          cursor: 'pointer',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? 'Submitting application...' : 'Start your application'}
      </button>

      {error && (
        <p style={{ color: 'red', textAlign: 'center', marginTop: '15px' }}>
          {error}
        </p>
      )}
    </form>
  );
}