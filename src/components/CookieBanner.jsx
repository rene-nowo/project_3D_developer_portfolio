import React from 'react';

const CookieBanner = ({ onAccept }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-primary text-white-100 p-4 shadow-md z-50">
      <div className="flex justify-between items-center">
        <p className="text-sm md:text-base">
          Wir nutzen ausschließlich technisch notwendige Cookies für eine optimale Nutzererfahrung.
        </p>
        <button 
          onClick={onAccept} 
          className="ml-4 bg-secondary text-black-200 hover:bg-secondary-dark py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
