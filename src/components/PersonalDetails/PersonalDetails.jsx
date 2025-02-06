import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import Select from "../Select/Select";
import ThreeItemsLayout from '../../layouts/Three-Items-Layour/ThreeItemsLayout'
import Input from "../Input/Input";
import SelectDate from "../SelectDate/SelectDate";

const PersonalDetails = ({ formData, handleSelectChange, title, index }) => {
  return (
    <InfoBox title={title}>
      <Select
        label={"Gender"}
        options={["Male", "Female"]}
        value={formData.personalDetails[index]?.gender || ""}
        onChange={(val) => handleSelectChange(`personalDetails.gender`, val.target.value, index)}
      />
      <ThreeItemsLayout
        first={
          <Input
            required
            label={"Given name(s)"}
            placeholder={"John"}
            value={formData.personalDetails[index].givenName && formData.personalDetails[index].givenName}
            onChange={(val) => handleSelectChange(`personalDetails.givenName`, val.target.value, index)}
          />
        }
        second={
          <Input
            label={"Middle name (if any)"}
            placeholder={"Paul"}
            value={formData.personalDetails[index].middleName && formData.personalDetails[index].middleName}
            onChange={(val) => handleSelectChange(`personalDetails.middleName`, val.target.value, index)}
          />
        }
        third={
          <Input
            required
            label={"Surname(s)"}
            placeholder={"Doe"}
            value={formData.personalDetails[index].surName && formData.personalDetails[index].surName}
            onChange={(val) => handleSelectChange(`personalDetails.surName`, val.target.value, index)}
          />
        }
      />
      <ThreeItemsLayout
        first={
          <SelectDate
            label={"Date of birth"}
            required
            value={formData.personalDetails[index].dateOfBirth && formData.personalDetails[index].dateOfBirth}
            onChange={(val) => handleSelectChange(`personalDetails.dateOfBirth`, val, index)}
          />
        }
        second={
          <Select
            label={"Country of birth"}
            required
            options={["Poland", "China", "England"]}
            value={formData.personalDetails[index].countryOfBirth && formData.personalDetails[index].countryOfBirth}
            onChange={(val) => handleSelectChange(`personalDetails.countryOfBirth`, val.target.value, index)}
          />
        }
        third={
          <Select
            label={"Nationality"}
            required
            options={["Poland", "China", "England"]}
            value={formData.personalDetails[index].nationality && formData.personalDetails[index].nationality}
            onChange={(val) => handleSelectChange(`personalDetails.nationality`, val.target.value, index)}
          />
        }
      />
    </InfoBox>
  );
};

export default PersonalDetails;