import React, { useState } from 'react'
import MainLayout from '../layouts/Main-Layout/MainLayout'
import Step from '../components/Step/Step'
import InfoBox from '../components/InfoBox/InfoBox'
import Input from '../components/Input/Input'
import CheckBox from '../components/CheckBox/CheckBox'
import TwoItemsLayout from '../layouts/Two-Items-Layout/TwoItemsLayout'
import CountryCodeSelect from '../components/CountryCodeSelect/CountryCodeSelect'

export default function FirstStep() {
    const [checkbox, setCheckbox] = useState(false)
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
              question="The contact person is who will receive every update and communication regarding your application."
              placeholder="John Doe"
              bottomText="Indicate the contact person's full name."
              />
          }
          
          second={
            <>
            <Input
            type="tel"
            left={<CountryCodeSelect/>}
            required
            label="Mobile/cellphone number"
            placeholder="123 123 123"
            question="All information regarding your application, including payment confirmation and updates, will be sent to the email address you provided."
          />
          </>
          }
          />
          <TwoItemsLayout first={
              <Input
              type="email"
              required
              label="Email Address"
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
            placeholder="email@mail.com"
            question="All information regarding your application, including payment confirmation and updates, will be sent to the email address you provided."
          />
          }
          
          />


        </InfoBox>
        <InfoBox title="Declaration of the Applicant">
          <CheckBox
            onChange={() => setCheckbox(!checkbox)}
            checked={checkbox}
            label="I declare that all the information I have provided is truthful, complete and accurate."
          />
          <CheckBox
            onChange={() => setCheckbox(!checkbox)}
            checked={checkbox}
            label="I have read and agree to the terms and conditions, the cancellation/refund policy and privacy policy."
          />
        </InfoBox>
      </div>
        </>
  )
}
