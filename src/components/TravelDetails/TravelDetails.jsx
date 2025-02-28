import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Select from "../Select/Select";
import { useLanguage } from "../../context/LanguageContext";

const TravelDetails = ({ formData, handleSelectChange }) => {
  const { t } = useLanguage();

  return (
    <InfoBox title={t.travel_details}>
      <TwoItemsLayout
        first={
          <Select
            required
            label={t.number_of_travelers}
            options={["1", "2", "3", "4"]}
            value={formData.numberOfTravelers}
            onChange={(val) => {
              handleSelectChange("numberOfTravelers", val.target.value);
            }}
          />
        }
        second={
          <Select
            required
            label={t.type_of_document}
            options={["ESTA", "ESTA (Urgent 24h)"]}
            question={t.indicate_type_of_document}
            value={formData.documentType}
            onChange={(val) => handleSelectChange("documentType", val.target.value)}
          />
        }
      />
    </InfoBox>
  );
};

export default TravelDetails;
