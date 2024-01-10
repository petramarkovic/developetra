import React from 'react';
import Wrap from '../ui/Wrap';

export const Contact = () => {
  return (
    <section className='contact'>
        <Wrap>
            <div className="contact__content">
                <h2 className="h2 contact__title">Not finding what you're looking for?</h2>
                <a className='btn' target="_blank" href="https://calendly.com/d/4z7-bt3-d58/one-off-meeting">book a call</a>
                <p className='text contact__text'>or find me through some of these channels</p>
                <ul className="contact__list">
                    <li className="contact__item">
                        <a href="mailto:petramarkovic996@gmail.com" className="contact__link">email</a>
                    </li>
                    <li className="contact__item">
                        <a href="https://github.com/petramarkovic" className="contact__link">github</a>
                    </li>
                    <li className="contact__item">
                        <a href="https://www.linkedin.com/in/petra-markovic-aa669b198/" className="contact__link">linkedin</a>
                    </li>
                </ul>
            </div>
        </Wrap>
    </section>
  )
}

