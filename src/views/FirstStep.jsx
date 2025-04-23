import React, { useState } from 'react';
import Step from '../components/Step/Step';
import InfoBox from '../components/InfoBox/InfoBox';
import Input from '../components/Input/Input';
import CheckBox from '../components/CheckBox/CheckBox';
import TwoItemsLayout from '../layouts/Two-Items-Layout/TwoItemsLayout';
import CountryCodeSelect from '../components/CountryCodeSelect/CountryCodeSelect';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';

export default function FirstStep({ formData, setFormData, setStep }) {
  const [errors, setErrors] = useState({});
    const { t } = useLanguage();

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
    if (!formData.contactName.trim()) newErrors.contactName = t.contact_name_is_required;
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = t.phone_number_is_required;
    if (!formData.emailAddress.trim()) newErrors.emailAddress = t.email_address_is_required;
    if (formData.emailAddress !== formData.confirmEmail) newErrors.confirmEmail = t.emails_do_not_match;
    if (!formData.trueInformation) newErrors.trueInformation = t.must_confirm_information;
    if (!formData.acceptation) newErrors.acceptation = t.must_accept_terms;
  
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
        <Step number={1} title={t.submit_application_online} active={true} />
        <Step number={2} title={t.review_and_confirm_payment} />
        <Step number={3} title={t.receive_approved_visa} />
      </div>
      <div className="content-layout">
        <InfoBox title="Contact Details">
          <TwoItemsLayout 
            first={
              <div>
                <Input
                  type="text"
                  required
                  label={t.contact_name}
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  question={t.the_contact_person_is_who_will_receive_every_update_and_communication_regarding_your_application}
                  placeholder="John Doe"
                  bottomText={t.indicate_the_contact_person_s_full_name}
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
                  label={t.mobile_cellphone_number}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="795325775" 
                  question={t.all_information_regarding_your_application_including_payment_confirmation_and_updates_will_be_sent_to_the_email_address_you_provided}
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
                  label={t.email_address}
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="email@mail.com"
                  bottomText={t.provide_a_contact_email_address}
                  question={t.all_information_regarding_your_application_including_payment_confirmation_and_updates_will_be_sent_to_the_email_address_you_provided}
                />
                {errors.emailAddress && <p className="error">{errors.emailAddress}</p>}
              </div>
            }
            second={
              <div>
                <Input
                  type="email"
                  required
                  label={t.confirm_email_address}
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  placeholder="email@mail.com"
                  question={t.all_information_regarding_your_application_including_payment_confirmation_and_updates_will_be_sent_to_the_email_address_you_provided}
                />
                {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}
              </div>
            }
          />
        </InfoBox> 

        <InfoBox title={t.declaration_of_the_applicant}>
          <div>
            <CheckBox
              name="trueInformation"
              onChange={handleChange}
              checked={formData.trueInformation}
              label={<Link to={'/privacy'} style={{color: 'black'}}>{t.i_declare_that_all_the_information_i_have_provided_is_truthful_complete_and_accurate}</Link>}
            />
            {errors.trueInformation && <p className="error">{errors.trueInformation}</p>}
          </div>
          <div>
            <CheckBox
              name="acceptation"
              onChange={handleChange}
              checked={formData.acceptation}
              label={<Link to={'/terms'} style={{color: 'black'}}>{t.i_have_read_and_agree_to_the_terms_and_conditions_the_cancellation_refund_policy_and_privacy_policy}</Link>}
            />
            {errors.acceptation && <p className="error">{errors.acceptation}</p>}
          </div>
        </InfoBox>
      </div>
      <button type="submit" className="primary" style={{margin: 'auto', display: 'block', marginTop: 20}}>{t.continue}</button>
    </form>
  );
}
