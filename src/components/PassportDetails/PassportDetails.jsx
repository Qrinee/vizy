import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";

const PassportDetails = ({ formData, handleSelectChange, title, index }) => {
  return (
    <InfoBox title={title}>
      <p style={{ padding: 20 }}>
        Provide details of the passport you will use to enter the country. Enter these details exactly as they appear in your passport.
      </p>
      <label style={{ padding: 20 }}>Do you have your passport on hand?</label>
      <Radio
        radio={[{ option: "Yes" }, { option: "No" }]}
        onChange={(val) => handleSelectChange(`passportDetails.selectedOption`, val, index)}
        value={formData.passportDetails[index]?.selectedOption || ""}
        ind={index}
      />
      <TwoItemsLayout
        first={
          <Select
            label={"Passport issuing country"}
            question={"Indicate which country issued the passport."}
            required
            options={["Poland", "China", "England"]}
            value={formData.passportDetails[index]?.passportIssuingCountry || ""}
            onChange={(val) => handleSelectChange(`passportDetails.passportIssuingCountry`, val.target.value, index)}
          />
        }
        second={
          formData.passportDetails[index]?.selectedOption === "Yes" ? (
            <>
            <Input
              required
              label={"Passport number"}
              question={"Indicate the passport number as shown in the biographic data page."}
              value={formData.passportDetails[index].passportNumber && formData.passportDetails[index].passportNumber}
              onChange={(val) => handleSelectChange(`passportDetails.passportNumber`, val.target.value, index)}
            />

            </>
          ) : null
        }
      />
    </InfoBox>
  );
};

export default PassportDetails;