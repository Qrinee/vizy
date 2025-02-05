import React from 'react'
import InfoBox from '../components/InfoBox/InfoBox'
import Input from '../components/Input/Input'
import Step from '../components/Step/Step'
import Select from '../components/Select/Select'
import TwoItemsLayout from '../layouts/Two-Items-Layout/TwoItemsLayout'

export default function SecondStep() {
  return (
    <>
    <div className="steps">
        <Step number={1} title="Submit Application Online" active={true} />
        <Step number={2} title="Review and Confirm Payment" />
        <Step number={3} title="Receive Approved Visa" />
    </div>
    <div className='content-layout'>
        <InfoBox title={"Travel details"}>
            <TwoItemsLayout 
                first={
                    <Select label={"Number of travelers"} options={["1", "2", "3", "4"]} />
                } 
                second={
                    <Select label={"Type of document"} options={["ESTA", "ESTA (Uregent 24h)"]} />
                }
            />


        </InfoBox>
        <InfoBox title={"Personal details - pax 1: Krystian Niemczyk"}>
            <Input required label={"Given name(s)"} />
            <Input label={"Middle name (if any)"} />
            <Input required label={"Surname(s)"} />
        </InfoBox>
        <InfoBox title={"Personal details - pax 1: Krystian Niemczyk"}/>
        <InfoBox title={"Billing information"}>
            <TwoItemsLayout 
                first={
                    <Input required label={"Address"}/>
                } 
                second={
                    <Input required label={"Postal code"}/>
                }
            />


            <Input required label={"City"}/>
        </InfoBox>
    </div>
    </>
  )
}
