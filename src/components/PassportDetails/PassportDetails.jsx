import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import TwoItemsLayout from "../../layouts/Two-Items-Layout/TwoItemsLayout";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import SelectDate from "../SelectDate/SelectDate";

const PassportDetails = ({ formData, handleSelectChange, title, index }) => {

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", 
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", 
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", 
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", 
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", 
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", 
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", 
    "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", 
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", 
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
    "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", 
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", 
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", 
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

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
            options={countries}
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
      {
        formData.passportDetails[index]?.selectedOption === "Yes" ? (
            <>
              <TwoItemsLayout
                first={
                  <SelectDate
                  label={"Passport issuance date"}
                  required
                  value={formData.passportDetails[index]?.passportInssuranceDate || ""}
                  onChange={(val) => handleSelectChange(`passportDetails.passportInssuranceDate`, val, index)}       
                  />
                }
                second={
                  <SelectDate
                  label={"Passport expiration date"}
                  required
                  value={formData.passportDetails[index]?.passportExpirationDate || ""}
                  onChange={(val) => handleSelectChange(`passportDetails.passportExpirationDate`, val, index)}
                  />
                }
              
              />
            
            </>
        ) : null
      }
    </InfoBox>
  );
};

export default PassportDetails;