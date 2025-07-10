"use client";
import ReCAPTCHA from 'react-google-recaptcha';
import {  useRef, useState } from 'react';

const Captcha = ({setCaptchaToken} ) => {
  const recaptchaRef = useRef();

  const handleCaptchaChange = (token) => {
    console.log('CAPTCHA Token:', token);
    setCaptchaToken(token);
  };
  

 

  return (
  <>
   <ReCAPTCHA
        sitekey="6LcoWn4rAAAAACz8lH0ckw7r0V5jFeCiZL1OImN5" 
        onChange={handleCaptchaChange}
        ref={recaptchaRef}
      />
      </>
  
  );
};

export default Captcha;
