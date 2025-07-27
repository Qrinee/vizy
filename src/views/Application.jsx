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
        documentType: "",
processingTime: 1,
    numberOfTravelers: "1",
    nationality: "",
    arrivalDate: "",
    passportDetails: [
      {
      nationality: "",
      addLater: false,
      passportNumber: "",
      passportExpirationDate: "",
      anotherNationalityExists: "no",
      anotherNationality: ""
      },
    ],    
    personalDetails: [
      {
        firstAndMiddleName: "",
        lastName: "",
        dateOfBirth: "",
      },
    ],

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
