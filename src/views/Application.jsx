import React, { useEffect, useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import MainLayout from "../layouts/Main-Layout/MainLayout";
import ThirdStep from "./ThirdStep";
import FourStep from "./FourStep";
import FiveStep from './FiveStep';

export default function Application() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    contactName: "",
    phoneNumber: "",
    emailAddress: "",
    confirmEmail: "",
    trueInformation: false,
    acceptation: false,
    countryCode: "",
    numberOfTravelers: "1",
    personalDetails: [
      {
        gender: "",
        givenName: "",
        middleName: "",
        surName: "",
        dateOfBirth: "",
        countryOfBirth: "",
        nationality: "",
      },
    ],
    passportDetails: [
      {
        selectedOption: "",
        passportIssuingCountry: "",
        passportNumber: "",
        passportInssuranceDate: "",
        passportExpirationDate: "",
      },
    ],
    documentType: "",
    billingCountry: "",
    address: "",
    postalCode: "",
    city: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(formData)
  }, [step]);

  return (
    <MainLayout>
      {step === 0 && <FirstStep formData={formData} setFormData={setFormData} setStep={setStep} />}
      {step === 1 && <SecondStep formData={formData} setFormData={setFormData} setStep={setStep} />}
      {step === 2 && <ThirdStep formData={formData} setFormData={setFormData} setStep={setStep} />}
      {step === 3 && <FourStep formData={formData} setFormData={setFormData} setStep={setStep}/>}
      {step === 4 && <FiveStep formData={formData} setFormData={setFormData} setStep={setStep} />}
    </MainLayout>
  );
}
