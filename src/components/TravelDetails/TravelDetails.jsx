import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Select from "../Select/Select";

const TravelDetails = ({ formData, handleSelectChange }) => {
  return (
    <InfoBox title={"Travel details"}>
      <TwoItemsLayout
        first={
          <Select
            required
            label={"Number of travelers"}
            options={["1", "2", "3", "4"]}
            value={formData.numberOfTravelers}
            onChange={(val) => {
              handleSelectChange("numberOfTravelers", val.target.value)
            }}
          />
        }
        second={
          <Select
            required
            label={"Type of document"}
            options={["ESTA", "ESTA (Urgent 24h)"]}
            question={"Indicate the type of document you wish to apply for"}
            value={formData.documentType}
            onChange={(val) => handleSelectChange("documentType", val.target.value)}
          />
        }
      />
    </InfoBox>
  );
};

export default TravelDetails;