import React, { useState } from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import SelectDate from "../SelectDate/SelectDate";
import { useLanguage } from "../../context/LanguageContext";
import { countries } from "../../countries";
import ReactFlagsSelect from "react-flags-select";
import CheckBox from "../CheckBox/CheckBox";
import ToggleRadio from "./ToggleRadio/ToggleRadio";

const PassportDetails = ({ formData, handleSelectChange, title, index }) => {
  const passportData = formData.passportDetails[index] || {};
  
  return (
    <InfoBox title={title}>
      <div className="input">
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>
          Nationality on passport
        </label>
        <ReactFlagsSelect
          selected={passportData.nationality || ""}
          onSelect={(code) => handleSelectChange(`passportDetails.nationality`, code, index)}
          searchable
        />
      </div>
      
      <div className="input">
        <CheckBox 
          checked={passportData.addLater || false}
          onChange={() => handleSelectChange(`passportDetails.addLater`, !passportData.addLater, index)}
          label={'Add passport details later'}
        />
      </div>
      
      {!passportData.addLater && (
        <>
          <Input 
            label={'Passport number'}
            value={passportData.passportNumber || ""}
            onChange={(e) => handleSelectChange(`passportDetails.passportNumber`, e.target.value, index)}
          />
          
          <SelectDate 
            label={'Passport expiration date'}
            value={passportData.passportExpirationDate || ""}
            onChange={(val) => handleSelectChange(`passportDetails.passportExpirationDate`, val, index)}
          />
        </>
      )}

      <div className="input">
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500'}}>
          Do you have another nationality?
        </label>
        <ToggleRadio 
          selected={passportData.anotherNationalityExists || 'no'}
          setSelected={(val) => handleSelectChange(`passportDetails.anotherNationalityExists`, val, index)}
        />
      </div>
      
      {passportData.anotherNationalityExists === 'yes' && (
        <div className="input">
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500'}}>
            Other nationality
          </label>
          <ReactFlagsSelect
            selected={passportData.anotherNationality || ""}
            onSelect={(code) => handleSelectChange(`passportDetails.anotherNationality`, code, index)}
            searchable
          />
        </div>
      )}
    </InfoBox>
  );
};

export default PassportDetails;
