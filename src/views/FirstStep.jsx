import React, { useState } from 'react';
import Step from '../components/Step/Step';
import InfoBox from '../components/InfoBox/InfoBox';
import Input from '../components/Input/Input';
import CheckBox from '../components/CheckBox/CheckBox';
import TwoItemsLayout from '../layouts/Two-Items-Layout/TwoItemsLayout';
import CountryCodeSelect from '../components/CountryCodeSelect/CountryCodeSelect';

export default function FirstStep({ formData, setFormData, setStep }) {
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
    if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required.";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    if (!formData.emailAddress.trim()) newErrors.emailAddress = "Email address is required.";
    if (formData.emailAddress !== formData.confirmEmail) newErrors.confirmEmail = "Emails do not match.";
    if (!formData.trueInformation) newErrors.trueInformation = "You must confirm the information.";
    if (!formData.acceptation) newErrors.acceptation = "You must accept the terms.";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setStep(1);  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="steps">
        <Step number={1} title="Submit Application Online" active={true} />
        <Step number={2} title="Review and Confirm Payment" />
        <Step number={3} title="Receive Approved Visa" />
      </div>
      <div className="content-layout">
        <InfoBox title="Contact Details">
          <TwoItemsLayout 
            first={
              <div>
                <Input
                  type="text"
                  required
                  label="Contact Name"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  question="The contact person is who will receive every update and communication regarding your application."
                  placeholder="John Doe"
                  bottomText="Indicate the contact person's full name."
                />
                {errors.contactName && <p className="error">{errors.contactName}</p>}
              </div>
            }
            second={
              <div>
                <Input
                  type="tel"
                  left={<CountryCodeSelect onChange={handleCountryCodeChange} value={formData.countryCode} />}
                  required
                  label="Mobile/cellphone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="795325775" 
                  question="All information regarding your application, including payment confirmation and updates, will be sent to the email address you provided."
                />
                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
              </div>
            }
          />
          <TwoItemsLayout 
            first={
              <div>
                <Input
                  type="email"
                  required
                  label="Email Address"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="email@mail.com"
                  bottomText="Provide a contact email address."
                  question="All information regarding your application, including payment confirmation and updates, will be sent to the email address you provided."
                />
                {errors.emailAddress && <p className="error">{errors.emailAddress}</p>}
              </div>
            }
            second={
              <div>
                <Input
                  type="email"
                  required
                  label="Confirm Email Address"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  placeholder="email@mail.com"
                  question="All information regarding your application, including payment confirmation and updates, will be sent to the email address you provided."
                />
                {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}
              </div>
            }
          />
        </InfoBox> 

        <InfoBox title="Declaration of the Applicant">
          <div>
            <CheckBox
              name="trueInformation"
              onChange={handleChange}
              checked={formData.trueInformation}
              label="I declare that all the information I have provided is truthful, complete and accurate."
            />
            {errors.trueInformation && <p className="error">{errors.trueInformation}</p>}
          </div>
          <div>
            <CheckBox
              name="acceptation"
              onChange={handleChange}
              checked={formData.acceptation}
              label="I have read and agree to the terms and conditions, the cancellation/refund policy and privacy policy."
            />
            {errors.acceptation && <p className="error">{errors.acceptation}</p>}
          </div>
        </InfoBox>
      </div>
      <button type="submit" className="primary" style={{margin: 'auto', display: 'block', marginTop: 20}}>Continue</button>
    </form>
  );
}
