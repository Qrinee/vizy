// src/components/HorizontalTravelForm.jsx
import React, { useState, useEffect } from 'react';
import './TravelForm.css';
import { useNavigate } from 'react-router';
import ReactFlagsSelect from 'react-flags-select';

const TravelForm = () => {
  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('GB');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPlane, setShowPlane] = useState(false);
    const [selected, setSelected] = useState("");

  const [planePosition, setPlanePosition] = useState(0);
  const navigator = useNavigate()
  const countries = [
    { value: '', label: 'Select country', disabled: true },
    { value: 'US', label: 'United States', flag: '🇺🇸' },
    { value: 'UK', label: 'United Kingdom', flag: '🇬🇧' },
    { value: 'CA', label: 'Canada', flag: '🇨🇦' },
    { value: 'AU', label: 'Australia', flag: '🇦🇺' },
    { value: 'DE', label: 'Germany', flag: '🇩🇪' },
    { value: 'FR', label: 'France', flag: '🇫🇷' },
    { value: 'JP', label: 'Japan', flag: '🇯🇵' },
    { value: 'BR', label: 'Brazil', flag: '🇧🇷' },
    { value: 'IN', label: 'India', flag: '🇮🇳' },
    { value: 'MX', label: 'Mexico', flag: '🇲🇽' },
    { value: 'IT', label: 'Italy', flag: '🇮🇹' },
    { value: 'ES', label: 'Spain', flag: '🇪🇸' },
    { value: 'TH', label: 'Thailand', flag: '🇹🇭' },
    { value: 'GR', label: 'Greece', flag: '🇬🇷' },
  ];

  useEffect(() => {
    if (fromCountry && toCountry) {
      setShowPlane(true);
      setPlanePosition(0);
      setTimeout(() => setPlanePosition(100), 100);
    } else {
      setShowPlane(false);
    }
  }, [fromCountry, toCountry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!fromCountry || !toCountry) {
      alert('Please select both your departure and destination countries');
      return;
    }
    
    setIsSubmitted(true);

    
    const fromText = countries.find(c => c.value === fromCountry)?.label;
    const toText = countries.find(c => c.value === toCountry)?.label;
    
    setTimeout(() => {
      navigator('/application', { 
        state: { 
          fromCountry, 
          toCountry,
          fromLabel: fromText,
          toLabel: toText
        } 
      });
      setIsSubmitted(false);
    }, 1000);
  };

  const getCountryFlag = (countryCode) => {
    const country = countries.find(c => c.value === countryCode);
    return country ? country.flag : '';
  };

  return (
      <div className="travel-form-card">
        <div className="form-header">
          <h1>Plan Your Journey</h1>
          <p>Select your departure and destination countries</p>
        </div>
        
        <form onSubmit={handleSubmit} className="horizontal-form">
          <div className="form-group">
            <div style={{color: 'black'}}>
                <ReactFlagsSelect
                            searchable={true}
    selected={fromCountry}
    onSelect={(code) => setFromCountry(code)}
  />
              <i className="fas fa-chevron-down"></i>
              <div className="form-label">
                <i className="fas fa-map-marker-alt"></i> Where am I from?
              </div>
            </div>
          </div>
          
          <div className="travel-path">
            {showPlane && (
              <div className="plane-animation" style={{ left: `${planePosition}%` }}>
                <div className="plane-icon">✈️</div>
                <div className="flight-path"></div>
              </div>
            )}
          </div>
          
          <div className="form-group">
            <div style={{color: 'black'}}>
                <ReactFlagsSelect
    selected={toCountry}
    disabled
    onSelect={(code) => setToCountry(code)}
  />

              <i className="fas fa-chevron-down"></i>
              <div className="form-label">
                <i className="fas fa-location-arrow"></i> Where am I going?
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            className={`submit-btn ${isSubmitted ? 'submitting' : ''}`}
            disabled={isSubmitted}
          >
            {isSubmitted ? (
              <div className="spinner"></div>
            ) : (
              <>
                Get started! <i className="fas fa-arrow-right"></i>
              </>
            )}
          </button>
        </form>
        
        <div className="selected-countries">
          {fromCountry && (
            <div className="country-display from-country">
              <span className="country-flag">{fromCountry}</span>
              <span className="country-name">{countries.find(c => c.value === fromCountry)?.label}</span>
            </div>
          )}
          
          {toCountry && (
            <div className="country-display to-country">
              <span className="country-flag">{toCountry}</span>
              <span className="country-name">{countries.find(c => c.value === toCountry)?.label}</span>
            </div>
          )}
        </div>
        
        <div className="form-footer">
          <p>Discover your next adventure</p>
        </div>
      </div>

  );
};

export default TravelForm;