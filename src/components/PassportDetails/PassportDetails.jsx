import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import SelectDate from "../SelectDate/SelectDate";
import { useLanguage } from "../../context/LanguageContext";
import { countries } from "../../countries";

const PassportDetails = ({ formData, handleSelectChange, title, index }) => {
  const { t } = useLanguage();
  const passportData = formData.passportDetails[index] || {};

  return (
    <InfoBox title={title}>
      <p style={{ padding: 20 }}>
        {t.provide_details_of_the_passport_you_will_use_to_enter_the_country_enter_these_details_exactly_as_they_appear_in_your_passport}
      </p>
      <label style={{ padding: 20 }}>{t.do_you_have_your_passport_on_hand}</label>
      <Radio
        radio={[{ option: t.yes }, { option: t.no }]}
        onChange={(val) => handleSelectChange(`passportDetails.selectedOption`, val, index)}
        value={passportData.selectedOption || ""}
      />
      <TwoItemsLayout
        first={
          <Select
            label={t.passport_issuing_country}
            question={t.indicate_which_country_issued_the_passport}
            required
            options={countries}
            value={passportData.passportIssuingCountry || ""}
            onChange={(val) => handleSelectChange(`passportDetails.passportIssuingCountry`, val.target.value, index)}
          />
        }
        second={
          passportData.selectedOption === t.yes && (
            <Input
              required
              label={t.passport_number}
              question={t.indicate_the_passport_number_as_shown_in_the_biographic_data_page}
              value={passportData.passportNumber || ""}
              onChange={(val) => handleSelectChange(`passportDetails.passportNumber`, val.target.value, index)}
            />
          )
        }
      />
      {passportData.selectedOption === t.yes && (
        <TwoItemsLayout
          first={
            <SelectDate
              label={t.passport_issuance_date}
              required
              value={passportData.passportIssuanceDate || ""}
              onChange={(val) => handleSelectChange(`passportDetails.passportIssuanceDate`, val, index)}
            />
          }
          second={
            <SelectDate
              label={t.passport_expiration_date}
              required
              value={passportData.passportExpirationDate || ""}
              onChange={(val) => handleSelectChange(`passportDetails.passportExpirationDate`, val, index)}
            />
          }
        />
      )}
    </InfoBox>
  );
};

export default PassportDetails;
