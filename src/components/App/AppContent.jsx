import React, { useEffect, useState } from 'react';
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
import secur from '../../assets/secur.png'
export default function AppContent() {
    const { t } = useLanguage();
        const [currentReview, setCurrentReview] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    
    // English reviews by default
    const reviews = [
        { 
            name: 'Emily R.', 
            text: 'The process was incredibly smooth and fast. Received my ESTA within 24 hours!',
            date: 'June 15, 2023',
            rating: 5
        },
        { 
            name: 'Michael T.', 
            text: 'Excellent service! Clear instructions and responsive support team. Highly recommend.',
            date: 'May 22, 2023',
            rating: 5
        },
        { 
            name: 'Sarah K.', 
            text: 'Was skeptical at first but everything worked perfectly. Visa arrived faster than promised.',
            date: 'July 3, 2023',
            rating: 4
        },
        { 
            name: 'David L.', 
            text: '5-star experience from start to finish. Will use this service for all my future travels.',
            date: 'April 18, 2023',
            rating: 5
        },
        { 
            name: 'Jessica M.', 
            text: 'The application was straightforward and the support team answered all my questions promptly.',
            date: 'August 12, 2023',
            rating: 5
        },
        { 
            name: 'Robert W.', 
            text: 'Impressed with the professionalism. Received my visa in just 18 hours!',
            date: 'September 5, 2023',
            rating: 5
        }
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const goToReview = (index) => {
        setCurrentReview(index);
    };

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isAutoPlay) {
            interval = setInterval(() => {
                nextReview();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlay, currentReview]);
  
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
                </div>
        <img src={secur} height={50} style={{marginTop: 20, opacity: '80%'}} />
            </Overlay>

<section className="reviews-section" style={{ 
    padding: '2rem 1rem', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa',
    position: 'relative',
    overflow: 'hidden'
}}>
    <h3 style={{ 
        fontSize: 'clamp(1.5rem, 5vw, 2rem)', 
        marginBottom: '0.5rem',
        color: '#2c3e50',
        fontWeight: 600,
        textAlign: 'center'
    }}>User Reviews</h3>
    <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '0.5rem'
    }}>
        <div style={{ 
            fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', 
            fontWeight: 'bold',
            marginRight: '0.5rem',
            color: '#f39c12'
        }}>★★★★★</div>
        <p style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
            fontWeight: 'bold',
            color: '#3498db'
        }}>4.90 / 5.00</p>
    </div>
    <p style={{ 
        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
        color: '#7f8c8d',
        marginBottom: '1.5rem'
    }}>(121 reviews)</p>
    
    {/* Carousel Container */}
    <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: 'calc(250px + 15vw)', 
        margin: '0 auto',
        padding: '0 40px'
    }}>
        {/* Navigation Arrows */}
        <button 
            onClick={prevReview}
            style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#3498db',
                border: 'none',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                zIndex: 10
            }}
            aria-label="Previous review"
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"/>
            </svg>
        </button>
        
        <button 
            onClick={nextReview}
            style={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#3498db',
                border: 'none',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                zIndex: 10
            }}
            aria-label="Next review"
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
            </svg>
        </button>
        
        {/* Review Cards */}
        <div style={{ 
            display: 'flex', 
            transition: 'transform 0.5s ease', 
            transform: `translateX(${-currentReview * 100}%)`,
            width: '100%'
        }}>
            {reviews.map((review, index) => (
                <div key={index} style={{
                    flex: '0 0 100%',
                    padding: '0 10px',
                    boxSizing: 'border-box'
                }}>
                    <div className="review" style={{
                        padding: '1.25rem',
                        background: '#ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        border: '1px solid #eaeaea',
                        minHeight: 'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            marginBottom: '0.8rem'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: '#3498db',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                marginRight: '0.8rem'
                            }}>
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <p style={{ 
                                    fontWeight: 600, 
                                    margin: 0,
                                    color: '#2c3e50',
                                    fontSize: '0.95rem'
                                }}>{review.name}</p>
                                <p style={{ 
                                    fontSize: '0.75rem', 
                                    color: '#95a5a6',
                                    margin: 0
                                }}>{review.date}</p>
                            </div>
                        </div>
                        <p style={{ 
                            fontStyle: 'italic', 
                            lineHeight: 1.5,
                            color: '#34495e',
                            flexGrow: 1,
                            marginBottom: '0.8rem',
                            fontSize: '0.9rem'
                        }}>"{review.text}"</p>
                        <div style={{ 
                            display: 'flex', 
                            marginTop: 'auto'
                        }}>
                            {[...Array(5)].map((_, i) => (
                                <svg 
                                    key={i}
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill={i < review.rating ? "#f39c12" : "#e0e0e0"} 
                                    style={{marginRight: '2px'}}
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    {/* Pagination Dots */}
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '1.25rem',
        gap: '0.4rem'
    }}>

        {reviews.map((_, index) => (
            <button
                key={index}
                onClick={() => goToReview(index)}
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentReview === index ? '#3498db' : '#e0e0e0',
                    cursor: 'pointer',
                    padding: 0
                }}
                aria-label={`Go to review ${index + 1}`}
            />
        ))}
    </div>
    
    {/* Mobile swipe indicator */}
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1.5rem',
        color: '#7f8c8d',
        fontSize: '0.85rem',
        gap: '0.5rem'
    }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#7f8c8d">
            <path d="M17.59 7L19 8.41 14.41 13 19 17.59 17.59 19 12 13.41 6.41 19 5 17.59 9.59 13 5 8.41 6.41 7 12 12.41z"/>
        </svg>
        <span>Swipe to see more</span>
    </div>
    

</section>


 
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
