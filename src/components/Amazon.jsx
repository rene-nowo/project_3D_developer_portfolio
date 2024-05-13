// src/components/Amazon.js

import React from 'react';

const Amazon = () => {

  const amazonStyle = {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    maxWidth: '800px', // You can adjust this as needed
  };


  return (
    <div style={amazonStyle} className='amazon'>
    <h1>Welcome to the Amazon Info Website</h1>
    <p>This site provides example projects showcasing various integrations and solutions for Amazon-related services.</p>
  </div>
);
};

export default Amazon;