import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import Select from "../Select/Select";
import ThreeItemsLayout from '../../layouts/Three-Items-Layour/ThreeItemsLayout';
import Input from "../Input/Input";
import SelectDate from "../SelectDate/SelectDate";
import { useLanguage } from "../../context/LanguageContext";
import { countries } from "../../countries";

const PersonalDetails = ({ formData, handleSelectChange, title, index }) => {
  return (
    <InfoBox title={title}>
      <Input
        required
        label={"First and middle name"}
        placeholder="John"
        value={formData.personalDetails[index]?.firstAndMiddleName || ""}
        onChange={(val) => 
          handleSelectChange(`personalDetails.firstAndMiddleName`, val.target.value, index)
        }
      />

      <Input
        required
        label={"Last name"}
        placeholder="Doe"
        value={formData.personalDetails[index]?.lastName || ""}
        onChange={(val) => 
          handleSelectChange(`personalDetails.lastName`, val.target.value, index)
        }
      />

      <SelectDate
        label={"Date of birth"}
        required
        value={formData.personalDetails[index]?.dateOfBirth || ""}
        onChange={(val) => 
          handleSelectChange(`personalDetails.dateOfBirth`, val, index)
        }
      />
    </InfoBox>
  );
};

export default PersonalDetails;
