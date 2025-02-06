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
    givenNames: "",
    middleName: "",
    surname: "",
    dateOfBirth: "",
    countryOfBirth: "",
    nationality: "",
    passportIssuingCountry: "",
    passportNumber: "",
    billingAddress: "",
    billingPostalCode: "",
    billingCity: "",
    billingCountry: "",
  });

  const [selectedOption, setSelectedOption] = useState("");
  const [forms, setForms] = useState([]);

  const handleSelectChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === "numberOfTravelers") {
      const numberOfTravelers = parseInt(value, 10);
      const newForms = Array.from({ length: numberOfTravelers - 1 }, (_, index) => (
        <React.Fragment key={index}>
          <InfoBox title={`Personal details - pax ${index + 2}`}>
            <Select
              label={"Gender"}
              options={["Male", "Female"]}
              value={formData[`gender${index + 2}`] || ""}
              onChange={(val) => handleSelectChange(`gender${index + 2}`, val.target.value)}
            />
            <ThreeItemsLayout
              first={
                <Input
                  required
                  label={"Given name(s)"}
                  placeholder={"John"}
                  value={formData[`givenNames${index + 2}`] || ""}
                  onChange={(val) => handleSelectChange(`givenNames${index + 2}`, val.target.value)}
                />
              }
              second={
                <Input
                  label={"Middle name (if any)"}
                  placeholder={"Paul"}
                  value={formData[`middleName${index + 2}`] || ""}
                  onChange={(val) => handleSelectChange(`middleName${index + 2}`, val.target.value)}
                />
              }
              third={
                <Input
                  required
                  label={"Surname(s)"}
                  placeholder={"Doe"}
                  value={formData[`surname${index + 2}`] || ""}
                  onChange={(val) => handleSelectChange(`surname${index + 2}`, val.target.value)}
                />
              }
            />
            <ThreeItemsLayout
              first={
                <SelectDate
                  label={"Date of birth"}
                  required
                  value={formData[`dateOfBirth${index + 2}`] || ""}
                  onChange={(val) => handleSelectChange(`dateOfBirth${index + 2}`, val.target.value)}
                />
              }
              second={
                <Select
                  label={"Country of birth"}
                  required
                  options={["Poland", "China", "England"]}
                  value={formData[`countryOfBirth${index + 2}`] || ""}
                  onChange={(val) => handleSelectChange(`countryOfBirth${index + 2}`, val.target.value)}
                />
              }
              third={
                <Select
                  label={"Nationality"}
                  required
                  options={["Poland", "China", "England"]}
                  value={formData[`nationality${index + 2}`] || ""}
                  onChange={(val) => handleSelectChange(`nationality${index + 2}`, val.target.value)}
                />
              }
            />
          </InfoBox>

          <InfoBox title={`Passport details - pax ${index + 2}`}>
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
                  value={formData[`passportIssuingCountry${index + 2}`] || ""}
                  onChange={(val) => handleSelectChange(`passportIssuingCountry${index + 2}`, val.target.value)}
                />
              }
              second={
                selectedOption === "Yes" ? (
                  <Input
                    required
                    label={"Passport number"}
                    question={"Indicate the passport number as shown in the biographic data page."}
                    value={formData[`passportNumber${index + 2}`] || ""}
                    onChange={(val) => handleSelectChange(`passportNumber${index + 2}`, val.target.value)}
                  />
                ) : null
              }
            />
          </InfoBox>
        </React.Fragment>
      ));

      setForms(newForms);
    }
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
            first={
              <Input
                required
                label={"Given name(s)"}
                placeholder={"John"}
                value={formData.givenNames}
                onChange={(val) => handleSelectChange("givenNames", val.target.value)}
              />
            }
            second={
              <Input
                label={"Middle name (if any)"}
                placeholder={"Paul"}
                value={formData.middleName}
                onChange={(val) => handleSelectChange("middleName", val.target.value)}
              />
            }
            third={
              <Input
                required
                label={"Surname(s)"}
                placeholder={"Doe"}
                value={formData.surname}
                onChange={(val) => handleSelectChange("surname", val.target.value)}
              />
            }
          />
          <ThreeItemsLayout
            first={
              <SelectDate
                label={"Date of birth"}
                required
                value={formData.dateOfBirth}
                onChange={(val) => handleSelectChange("dateOfBirth", val.target.value)}
              />
            }
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

        <InfoBox title={`Passport details - pax Krystian Niemczyk`}>
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
            second={
              selectedOption === "Yes" ? (
                <Input
                  required
                  label={"Passport number"}
                  question={"Indicate the passport number as shown in the biographic data page."}
                  value={formData.passportNumber}
                  onChange={(val) => handleSelectChange("passportNumber", val.target.value)}
                />
              ) : null
            }
          />
        </InfoBox>

        {forms}

        <InfoBox title={"Billing information"}>
          <TwoItemsLayout
            first={
              <Input
                required
                label={"Address"}
                value={formData.billingAddress}
                onChange={(val) => handleSelectChange("billingAddress", val.target.value)}
              />
            }
            second={
              <Input
                required
                label={"Postal code"}
                value={formData.billingPostalCode}
                onChange={(val) => handleSelectChange("billingPostalCode", val.target.value)}
              />
            }
          />
          <TwoItemsLayout
            first={
              <Input
                required
                label={"City"}
                value={formData.billingCity}
                onChange={(val) => handleSelectChange("billingCity", val.target.value)}
              />
            }
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