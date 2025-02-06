import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import Select from "../Select/Select";
import ThreeItemsLayout from '../../layouts/Three-Items-Layour/ThreeItemsLayout'
import Input from "../Input/Input";
import SelectDate from "../SelectDate/SelectDate";

const PersonalDetails = ({ formData, handleSelectChange, title }) => {
  return (
    <InfoBox title={title}>
      <Select
        label={"Gender"}
        options={["Male", "Female"]}
        value={formData.gender}
        onChange={(val) => handleSelectChange("gender", val.target.value)}
      />
      <ThreeItemsLayout
        first={<Input required label={"Given name(s)"} placeholder={"John"} />}
        second={<Input label={"Middle name (if any)"} placeholder={"Paul"} />}
        third={<Input required label={"Surname(s)"} placeholder={"Doe"} />}
      />
      <ThreeItemsLayout
        first={<SelectDate label={"Date of birth"} required />}
        second={
          <Select
            label={"Country of birth"}
            required
            options={["Poland", "China", "England"]}
            value={formData.countryOfBirth}
            onChange={(val) => handleSelectChange("countryOfBirth", val.target.value)}
          />
        }
        third={
          <Select
            label={"Nationality"}
            required
            options={["Poland", "China", "England"]}
            value={formData.nationality}
            onChange={(val) => handleSelectChange("nationality", val.target.value)}
          />
        }
      />
    </InfoBox>
  );
};

export default PersonalDetails;