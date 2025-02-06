import React, { useState } from 'react';
import MainLayout from '../layouts/Main-Layout/MainLayout';
import Step from '../components/Step/Step';
import InfoBox from '../components/InfoBox/InfoBox';
import Input from '../components/Input/Input';
import CheckBox from '../components/CheckBox/CheckBox';
import TwoItemsLayout from '../layouts/Two-Items-Layout/TwoItemsLayout';
import CountryCodeSelect from '../components/CountryCodeSelect/CountryCodeSelect';

export default function FirstStep() {
  const [formData, setFormData] = useState({
    contactName: "",
    phoneNumber: "",
    emailAddress: "",
    confirmEmail: "",
    trueInformation: false,
    acceptation: false,
    countryCode: "", 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleCountryCodeChange = (code) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
      phoneNumber: `${code} ${prev.phoneNumber.replace(prev.countryCode, '').trim()}`,
    }));
  };

  return (
    <>
      <div className="steps">
        <Step number={1} title="Submit Application Online" active={true} />
        <Step number={2} title="Review and Confirm Payment" />
        <Step number={3} title="Receive Approved Visa" />
      </div>
      <div className="content-layout">
        <InfoBox title="Contact Details">
          <TwoItemsLayout 
            first={
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
            }
            second={
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
            }
          />
          <TwoItemsLayout 
            first={
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
            }
            second={
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
            }
          />
        </InfoBox>

        <InfoBox title="Declaration of the Applicant">
          <CheckBox
            name="trueInformation"
            onChange={handleChange}
            checked={formData.trueInformation}
            label="I declare that all the information I have provided is truthful, complete and accurate."
          />
          <CheckBox
            name="acceptation"
            onChange={handleChange}
            checked={formData.acceptation}
            label="I have read and agree to the terms and conditions, the cancellation/refund policy and privacy policy."
          />
        </InfoBox>
      </div>
      <button className="primary" onClick={() => console.log(formData)}>CLICK ME</button>
    </>
  );
}
