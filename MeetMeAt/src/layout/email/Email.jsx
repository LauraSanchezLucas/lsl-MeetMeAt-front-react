import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css';

export const Email = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uim9yke', 'template_i0091de', form.current, '84Qi_F-DIWGdD82Dt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    return (
        <form ref={form} onSubmit={sendEmail} className='field'>
          <label>Name</label>
          <input type="text" name="user_name" className='input-style' />
          <label>Email</label>
          <input type="email" name="user_email" className='input-style' />
          <label>Enter your business CIF</label>
          <textarea name="message" className='input-style'/>
          <input type="submit" value="Send" />
        </form>
      );
    };

    