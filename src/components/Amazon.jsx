// src/components/Amazon.js

import React from 'react';
import Contact from './Contact';
import AmazonKeyPoints from './AmazonKeyPoints';
import AmazonInsights from './AmazonInsights';


const Amazon = () => {

  return (

    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' >
        <AmazonKeyPoints/>
        <AmazonInsights/>  
        <Contact />
      </div>
    </div>
  );
};

export default Amazon;