import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import Select from "../Select/Select";
import ThreeItemsLayout from '../../layouts/Three-Items-Layour/ThreeItemsLayout';
import Input from "../Input/Input";
import SelectDate from "../SelectDate/SelectDate";
import { useLanguage } from "../../context/LanguageContext";
import { countries } from "../../countries";

const PersonalDetails = ({ formData, handleSelectChange, title, index }) => {
  const { t } = useLanguage();


  return (
    <InfoBox title={title}>
      <Select
        label={t.gender}
        options={[t.male, t.female]}
        value={formData.personalDetails[index]?.gender || ""}
        onChange={(val) => handleSelectChange(`personalDetails.gender`, val.target.value, index)}
      />
      <ThreeItemsLayout
        first={
          <Input
            required
            label={t.given_name}
            placeholder="John"
            value={formData.personalDetails[index]?.givenName || ""}
            onChange={(val) => handleSelectChange(`personalDetails.givenName`, val.target.value, index)}
          />
        }
        second={
          <Input
            label={t.middle_name}
            placeholder="Paul"
            value={formData.personalDetails[index]?.middleName || ""}
            onChange={(val) => handleSelectChange(`personalDetails.middleName`, val.target.value, index)}
          />
        }
        third={
          <Input
            required
            label={t.surname}
            placeholder="Doe"
            value={formData.personalDetails[index]?.surName || ""}
            onChange={(val) => handleSelectChange(`personalDetails.surName`, val.target.value, index)}
          />
        }
      />
      <ThreeItemsLayout
        first={
          <SelectDate
            label={t.date_of_birth}
            required
            value={formData.personalDetails[index]?.dateOfBirth || ""}
            onChange={(val) => handleSelectChange(`personalDetails.dateOfBirth`, val, index)}
          />
        }
        second={
          <Select
            label={t.country_of_birth}
            required
            options={countries}
            value={formData.personalDetails[index]?.countryOfBirth || ""}
            onChange={(val) => handleSelectChange(`personalDetails.countryOfBirth`, val.target.value, index)}
          />
        }
        third={
          <Select
            label={t.nationality}
            required
            options={countries}
            value={formData.personalDetails[index]?.nationality || ""}
            onChange={(val) => handleSelectChange(`personalDetails.nationality`, val.target.value, index)}
          />
        }
      />
    </InfoBox>
  );
};

export default PersonalDetails;
