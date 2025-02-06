import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Input from "../Input/Input";
import Select from "../Select/Select";

const BillingInformation = ({ formData, handleSelectChange }) => {
  return (
    <InfoBox title={"Billing information"}>
      <TwoItemsLayout first={<Input required label={"Address"} />} second={<Input required label={"Postal code"} />} />
      <TwoItemsLayout
        first={<Input required label={"City"} />}
        second={
          <Select
            label={"Country"}
            required
            options={["Poland", "China", "England"]}
            value={formData.billingCountry}
            onChange={(val) => handleSelectChange("billingCountry", val.target.value)}
          />
        }
      />
    </InfoBox>
  );
};

export default BillingInformation;