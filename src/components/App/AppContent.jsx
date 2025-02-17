import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Overlay from '../Overlay/Overlay';
import PartLayout from '../../layouts/Part-Layout/PartLayout';
import PositivesLayout from '../../layouts/Positives-Layout/PositivesLayout';
import Positive from '../Positive/Positive';
import IconWithText from '../IconWithText/IconWithText';
import ToggleText from '../ToggleText/ToggleText';
import { Link } from 'react-router';

import usa from '../../assets/usa.jpg';
import usa2 from '../../assets/usa2.jpg';
import laptop from '../../assets/laptop.png';
import callendar from '../../assets/callendar.png';
import email from '../../assets/email.png';
import image from '../../assets/img.jpeg';
import student from '../../assets/student.png';
import time from '../../assets/time.png';
import checked from '../../assets/checked.png';
import wifi from '../../assets/wifi.png';

export default function AppContent() {
    const { t } = useLanguage();
  
    return (
        <>
            <div className='disclaimer'>{t.disclaimer}</div>
            <Overlay img={usa} bg={'rgba(0, 0, 0, 0.53)'}>
                <h1>{t.title}</h1>
                <h2>{t.subtitle}</h2>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <Link to={'/application'}>
                        <button className='primary'>{t.btn_start}</button>
                    </Link>
                    <button className='secondary'>{t.btn_read_more}</button>
                </div>
            </Overlay>
            
            <PartLayout img={image}>
                <h3>{t.h1}</h3>
                <p>{t.desc}</p>
                <p>{t.trustus}</p>
                <ToggleText title={t.esta_title}>
                    <p><b>{t.multipleentries}:</b> yes</p>
                    <p><b>{t.validity}:</b> 2 years</p>
                    <p><b>{t.maximumVisit}:</b> 90 days</p>
                    <p><b>{t.processingTime}:</b> 72 hours</p>
                    <p><b>{t.requirements}:</b> {t.esta_requirements}</p>
                    <p><u><b>{t.eligible_countries}:</b></u> yes</p>
                </ToggleText>
                <ToggleText title={t.visitor_visa_title}>
                    <p><b>{t.multipleentries}:</b> yes</p>
                    <p><b>{t.validity}:</b> 2 years</p>
                    <p><b>{t.maximumVisit}:</b> 90 days</p>
                    <p><b>{t.requirements}:</b> {t.esta_requirements}</p>
                </ToggleText>
            </PartLayout>

            <PositivesLayout title={t.how_to_apply}>
                <Positive icon={laptop} title={t.apply_online} content={t.apply_online_desc} />
                <Positive icon={callendar} title={t.confirm_fee} content={t.confirm_fee_desc} />
                <Positive icon={email} title={t.email_delivery} content={t.email_delivery_desc} />
            </PositivesLayout>

            <section className='section-icon-with-text'>
                <IconWithText icon={wifi} title={t.online_title} content={t.online_desc} />
                <IconWithText icon={student} title={t.certified_agent} content={t.certified_agent_desc} />
                <IconWithText icon={time} title={t.processing_time_title} content={t.processing_time_desc} />
                <IconWithText icon={checked} title={t.experience} content={t.experience_desc} />
            </section>

            <PartLayout img={usa2}>
                <h3>{t.visa_types_title}</h3>
                <p>{t.visa_types_desc}</p>
                <ul>
                    <li><b>{t.esta_visa}</b></li>
                    <li><b>{t.b1b2_visa}</b></li>
                    <li><b>{t.green_card}</b></li>
                </ul>
            </PartLayout>
        </>
    );
}
