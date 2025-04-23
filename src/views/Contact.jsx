import React, { useState } from 'react';
import Input from '../components/Input/Input';
import CountryCodeSelect from '../components/CountryCodeSelect/CountryCodeSelect';
import InfoBox from '../components/InfoBox/InfoBox';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header/Header';
import { Link } from 'react-router';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phoneNumber: '',
    countryCode: '+48',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (code) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
      phoneNumber: `${code} ${prev.phoneNumber.replace(prev.countryCode, '').trim()}`,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = t?.full_name_is_required || "Full name is required";
    if (!formData.email.trim()) newErrors.email = t?.email_is_required || "Email is required";
    if (!formData.country.trim()) newErrors.country = t?.country_is_required || "Country is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = t?.phone_number_is_required || "Phone number is required";
    if (!formData.message.trim()) newErrors.message = t?.message_is_required || "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Tutaj możesz dodać wysyłkę danych do backendu lub API
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit} style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{textAlign: 'center', fontSize: '50px'}}>{t?.contact_us || 'Contact Us'}</h2>
      <Link to={'/'} style={{textAlign: 'center', display: 'block', margin: 'auto'}}>Back to HomePage</Link>
      {submitted ? (
        <p style={{ color: 'green', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>{t?.form_submitted_thank_you || 'Thank you for your message!'}</p>
      ) : (
        <InfoBox title={t?.contact_form || 'Contact Form'}>
          <div style={{ marginBottom: '1rem' }}>
            <Input
              type="text"
              label={t?.full_name || 'Full Name'}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <Input
              type="email"
              label={t?.email || 'Email'}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <Input
              type="text"
              label={t?.country || 'Country'}
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Poland"
            />
            {errors.country && <p className="error">{errors.country}</p>}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <Input
              type="tel"
              left={<CountryCodeSelect onChange={handleCountryCodeChange} value={formData.countryCode} />}
              label={t?.phone_number || 'Phone Number'}
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="123456789"
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>

          <div style={{  margin: 20, marginBottom: '1rem'  }}>
            <label>{t?.message || 'Message'}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={5}
              style={{ width: '100%', fontFamily: 'Arial', padding: '0.5rem', borderRadius: 8, borderColor: '#ccc' }}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="primary" style={{ display: 'block', margin: '0 auto' }}>
            {t?.submit || 'Submit'}
          </button>
        </InfoBox>
      )}
    </form>
    </>
  );
}
