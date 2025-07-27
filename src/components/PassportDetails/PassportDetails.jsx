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
  const { t } = useLanguage();
  const passportData = formData.passportDetails[index] || {};
  const [chk, setChk] = useState(false)
  const [selected, setSelected] = useState('yes')

  return (
    <InfoBox title={title}>
      <p>Nationality on passport</p>
       <div className="input">
                 <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              What's your nationality?
            </label>
                <ReactFlagsSelect  
                searchable
                
                />
</div>
       <div className="input">
                <CheckBox checked={chk} onChange={() => setChk(!chk)} label={'Add passport details later'} value={formData.personalDetails[index]?.surName || ""}/> 
</div>
{
  !chk ? (
    <>
      <Input label={'Passport number'} />
      <SelectDate label={'Passport expiration date'} />
    </>
  ) : <></>
}

                  <div className="input">
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500'}}>Do you have another nationality?</label>
                <ToggleRadio selected={selected} setSelected={setSelected}/>
                </div>
                {
                  selected == 'yes' ? (
                <div className="input">
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500'}}>Other nationality</label>
      <ReactFlagsSelect  
                searchable
                
                />
                </div>
                  ) : <></>
                }

    </InfoBox>
  );
};

export default PassportDetails;
