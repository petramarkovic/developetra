import React, { useState, useRef } from 'react';

export const Accordion = ({ title, service, num, link, desc, img, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const item = useRef(null);

  const accordionClickHandler = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={`accordion ${isOpen ? 'accordion--active' : ''}`}>
      <button type='button' className='accordion__btn' onClick={accordionClickHandler}>
          <span className='accordion__info'>
              <h2 className="h2 accordion__title">{title}</h2>
              <p className="accordion__service">{service}</p>
          </span>
          <span className="accordion__icon">
            <span>{num}</span>
          </span>
      </button>
      <div className="accordion__content" ref={item}>
        <div className='accordion__col'>
          <a className='accordion__link' target='_blank' rel="noopener noreferrer" href={link}>{link}</a>
          <p className="accordion__desc">{desc}</p>
        </div>
        <div className='accordion__col'>
          <img className='accordion__img' src={img} alt={alt} />
        </div>
      </div>
    </div>
  )
}
