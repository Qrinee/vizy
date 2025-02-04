import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import Overlay from '../Overlay/Overlay'
import usa from '../../assets/usa.jpg'
import usa2 from '../../assets/usa2.jpg'
import laptop from '../../assets/laptop.png'
import callendar from '../../assets/callendar.png'
import email from '../../assets/email.png'
import PartLayout from '../../layouts/Part-Layout/PartLayout'
import image from '../../assets/img.jpeg'
import student from '../../assets/student.png'
import time from '../../assets/time.png'
import checked from '../../assets/checked.png'
import wifi from '../../assets/wifi.png'
import ToggleText from '../ToggleText/ToggleText'
import PositivesLayout from '../../layouts/Positives-Layout/PositivesLayout'
import Positive from '../Positive/Positive'
import IconWithText from '../IconWithText/IconWithText'
import { Link } from 'react-router'
export default function AppContent() {

    const { t } = useLanguage()
  return (
    <>
        <div className='disclaimer'>{t.disclaimer}</div>
        <Overlay img={usa} bg={"rgba(0, 0, 0, 0.53)"}>
            <h1>{t.title}</h1>
            <h2>{t.subtitle}</h2>
            <div>
              <Link to={'/application'}>
                <button className='primary'>{t.btn_start}</button>
              </Link>
              <button className='secondary'>{t.btn_read_more}</button>
            </div>
        </Overlay>
        <PartLayout img={image}>
          <h3>United States ESTA and Visa</h3>
          <p>Planning to move or travel to the United States? Ensure the whole process is a smooth and hassle-free experience! Us and our partners will be by your side on every step. Get personalised support tailored to your unique circumstances, offering advice and assistance throughout the entire process, from visa applications to settling in.</p>
          <p>Trust us to make your transition smooth and straightforward.</p>
          <ToggleText title={"ESTA - Visa Waiver Program"}>
            <p><b>Multiple entries:</b> yes</p>
            <p><b>Validity:</b> 2 years</p>
            <p><b>Maximum visit:</b> 90 days</p>
            <p><b>Processing time:</b> 72 hours</p>
            <p><b>Requirements:</b> passport</p>
            <p><u><b>Elgible countries:</b></u> yes</p>
          </ToggleText>
          <ToggleText title={"Visitor Visa"}>
          <p><b>Multiple entries:</b> yes</p>
            <p><b>Validity:</b> 2 years</p>
            <p><b>Maximum visit:</b> 90 days</p>
            <p><b>Requirements:</b> passport</p>
          </ToggleText>
        </PartLayout>

        <PositivesLayout title={"How to apply for the US ESTA"} >
          <Positive icon={laptop} title={"Apply online"} content={"Complete a simplified 100% online application"} />
          <Positive icon={callendar} title={"Confirm visa fee"} content={"Review information and submit documents"} />
          <Positive icon={email} title={"E-mail delivery"} content={"Receive your approved visa in less than 72 hours!"} />
        </PositivesLayout>

        <section className='section-icon-with-text'>
          <IconWithText icon={wifi} title={"100% On-line"} content={"Almost all requests are handled fully online. All you need without ever leaving your house!"}/>
          <IconWithText icon={student} title={"Certified agent"} content={"We collaborate with local certified migration agents. We make sure everything is 100% correct and legal."}/>
          <IconWithText icon={time} title={"72h processing"} content={"The fastest processing you can get! Over 95 % of our visas are approved in less than 72 hours!"}/>
          <IconWithText icon={checked} title={"Years of experience"} content={"When it comes to visa, experience is priceless. And our company has over 7 years of experience."}/>
        </section>

        <PartLayout img={usa2}>
          <h3>United States visa types</h3>
          <p>The most common visas and processes we help our clients with:</p>
          <ul>
            <li><b>ESTA visa-waiver:</b> simple travel authorisation for selected countries</li>
            <li><b>B1/B2 visitor visa:</b> main tourist visa for all travellers to the USA</li>
            <li><b>Green card:</b> permanent resident visa that allows a non-U.S. citizen to live and work indefinitely in the United States</li>
          </ul>

        </PartLayout>
    </>
  )
}
