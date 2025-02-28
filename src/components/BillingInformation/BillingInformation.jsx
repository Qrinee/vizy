import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { countries } from "../../countries";
import { useLanguage } from "../../context/LanguageContext";

const BillingInformation = ({ formData, handleSelectChange }) => {
  const {t} = useLanguage()
  return (
    <InfoBox title={t.billing_information}>
      <TwoItemsLayout
        first={
          <Input
            required
            label={t.address}
            value={formData.address}
            onChange={(val) => handleSelectChange("address", val.target.value)}
          />
        }
        second={
          <Input
            required
            label={t.postal_code}
            value={formData.postalCode}
            onChange={(val) => handleSelectChange("postalCode", val.target.value)}
          />
        }
      />
      <TwoItemsLayout
        first={
          <Input
            required
            label={t.city}
            value={formData.city}
            onChange={(val) => handleSelectChange("city", val.target.value)}
          />
        }
        second={
          <Select
            label={t.country}
            required
            options={countries}
            value={formData.billingCountry}
            onChange={(val) => handleSelectChange("billingCountry", val.target.value)}
          />
        }
      />
    </InfoBox>
  );
};

export default BillingInformation;