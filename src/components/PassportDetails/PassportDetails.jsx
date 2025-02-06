import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";

const PassportDetails = ({ formData, handleSelectChange, selectedOption, setSelectedOption, title }) => {
  return (
    <InfoBox title={title}>
      <p style={{ padding: 20 }}>
        Provide details of the passport you will use to enter the country. Enter these details exactly as they appear in your passport.
      </p>
      <label style={{ padding: 20 }}>Do you have your passport on hand?</label>
      <Radio
        radio={[{ option: "Yes" }, { option: "No" }]}
        onChange={(val) => setSelectedOption(val)}
        value={selectedOption}
      />
      <TwoItemsLayout
        first={
          <Select
            label={"Passport issuing country"}
            question={"Indicate which country issued the passport."}
            required
            options={["Poland", "China", "England"]}
            value={formData.passportIssuingCountry}
            onChange={(val) => handleSelectChange("passportIssuingCountry", val.target.value)}
          />
        }
        second={selectedOption === "Yes" ? <Input required label={"Passport number"} question={"Indicate the passport number as shown in the biographic data page."} /> : null}
      />
    </InfoBox>
  );
};

export default PassportDetails;