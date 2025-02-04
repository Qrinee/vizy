import React, { useState, useRef, useEffect } from 'react';
import './toggletext.css';
import arrow from '../../assets/arrow.png';

export default function ToggleText({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    isOpen ? setHeight(contentRef.current.scrollHeight) : setHeight(0)
  }, [isOpen]);

  return (
    <div className="toggle-container">
      <div className='toggle-layout' onClick={() => setIsOpen(!isOpen)}>
        <img 
          src={arrow} 
          width={10} 
          className={`toggle-icon ${isOpen ? 'open' : ''}`} 
          alt="toggle"
        />
        <div className='toggle-title'>{title}</div>
      </div>
      <div 
        className='toggle-down' 
        ref={contentRef} 
        style={{ maxHeight: `${height}px`, opacity: isOpen ? 1 : 0, transition: 'max-height 0.3s ease, opacity 0.3s ease' }}
      >
        {children}
      </div>
    </div>
  );
}
