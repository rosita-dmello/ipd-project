import React from 'react';

export const Button = ({ content }) => {
  return (
    <button className="font-poppins font-medium rounded bg-btn px-10 py-2 text-white text-lg md:text-xl tracking-wider hover:shadow-md">
      {content}
    </button>
  );
};
