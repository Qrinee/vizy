import React, { useState } from "react";
import InfoBox from "../components/InfoBox/InfoBox";
import Input from "../components/Input/Input";
import Step from "../components/Step/Step";
import Select from "../components/Select/Select";
import TwoItemsLayout from "../layouts/Two-Items-Layout/TwoItemsLayout";
import SelectDate from "../components/SelectDate/SelectDate";
import ThreeItemsLayout from "./../layouts/Three-Items-Layour/ThreeItemsLayout";
import Radio from "../components/Radio/Radio";

export default function SecondStep() {
  const [formData, setFormData] = useState({
    numberOfTravelers: "",
    documentType: "",
    gender: "",
    countryOfBirth: "",
    nationality: "",
    passportIssuingCountry: "",
    billingCountry: "",
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(formData)
  };

  return (
    <>
      <div className="steps">
        <Step number={1} title="Submit Application Online" active={true} />
        <Step number={2} title="Review and Confirm Payment" />
        <Step number={3} title="Receive Approved Visa" />
      </div>
      <div className="content-layout">
        <InfoBox title={"Travel details"}>
          <TwoItemsLayout
            first={
              <Select
                required
                label={"Number of travelers"}
                options={["1", "2", "3", "4"]}
                value={formData.numberOfTravelers}
                onChange={(val) => handleSelectChange("numberOfTravelers", val.target.value)}
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

        <InfoBox title={"Personal details - pax 1: Krystian Niemczyk"}>
          <Select
            label={"Gender"}
            options={["Male", "Female"]}
            value={formData.gender}
            onChange={(val) => handleSelectChange("gender", val.target.value)}
          />
          <ThreeItemsLayout
            first={<Input required label={"Given name(s)"} placeholder={"John"} />}
            second={<Input label={"Middle name (if any)"} placeholder={"Paul"} />}
            third={<Input required label={"Surname(s)"} placeholder={"Doe"} />}
          />
          <ThreeItemsLayout
            first={<SelectDate label={"Date of birth"} required />}
            second={
              <Select
                label={"Country of birth"}
                required
                options={["Poland", "China", "England"]}
                value={formData.countryOfBirth}
                onChange={(val) => handleSelectChange("countryOfBirth", val.target.value)}
              />
            }
            third={
              <Select
                label={"Nationality"}
                required
                options={["Poland", "China", "England"]}
                value={formData.nationality}
                onChange={(val) => handleSelectChange("nationality", val.target.value)}
              />
            }
          />
        </InfoBox>

        <InfoBox title={"Passport details - pax 1: Krystian Niemczyk"}>
          <p style={{ padding: 20 }}>
            Provide details of the passport you will use to enter the country. Enter these details exactly as they appear in your passport.
          </p>
          <label style={{ padding: 20 }}>Do you have your passport on hand?</label>
          <Radio radio={[{ option: "Yes" }, { option: "No" }]} onChange={setSelectedOption} value={selectedOption} />
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
      </div>
    </>
  );
}
