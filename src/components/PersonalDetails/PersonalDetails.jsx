import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import Select from "../Select/Select";
import ThreeItemsLayout from '../../layouts/Three-Items-Layour/ThreeItemsLayout'
import Input from "../Input/Input";
import SelectDate from "../SelectDate/SelectDate";

const PersonalDetails = ({ formData, handleSelectChange, title, index }) => {

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
      <Select
        label={"Gender"}
        options={["Male", "Female"]}
        value={formData.personalDetails[index]?.gender || ""}
        onChange={(val) => handleSelectChange(`personalDetails.gender`, val.target.value, index)}
      />
      <ThreeItemsLayout
        first={
          <Input
            required
            label={"Given name(s)"}
            placeholder={"John"}
            value={formData.personalDetails[index].givenName && formData.personalDetails[index].givenName}
            onChange={(val) => handleSelectChange(`personalDetails.givenName`, val.target.value, index)}
          />
        }
        second={
          <Input
            label={"Middle name (if any)"}
            placeholder={"Paul"}
            value={formData.personalDetails[index].middleName && formData.personalDetails[index].middleName}
            onChange={(val) => handleSelectChange(`personalDetails.middleName`, val.target.value, index)}
          />
        }
        third={
          <Input
            required
            label={"Surname(s)"}
            placeholder={"Doe"}
            value={formData.personalDetails[index].surName && formData.personalDetails[index].surName}
            onChange={(val) => handleSelectChange(`personalDetails.surName`, val.target.value, index)}
          />
        }
      />
      <ThreeItemsLayout
        first={
          <SelectDate
            label={"Date of birth"}
            required
            value={formData.personalDetails[index].dateOfBirth && formData.personalDetails[index].dateOfBirth}
            onChange={(val) => handleSelectChange(`personalDetails.dateOfBirth`, val, index)}
          />
        }
        second={
          <Select
            label={"Country of birth"}
            required
            options={countries}
            value={formData.personalDetails[index].countryOfBirth && formData.personalDetails[index].countryOfBirth}
            onChange={(val) => handleSelectChange(`personalDetails.countryOfBirth`, val.target.value, index)}
          />
        }
        third={
          <Select
            label={"Nationality"}
            required
            options={countries}
            value={formData.personalDetails[index].nationality && formData.personalDetails[index].nationality}
            onChange={(val) => handleSelectChange(`personalDetails.nationality`, val.target.value, index)}
          />
        }
      />
    </InfoBox>
  );
};

export default PersonalDetails;