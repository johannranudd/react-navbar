import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Menuicon = ({ handleClick }) => {
  return (
    <button className='menu-btn' onClick={handleClick}>
      <FiMenu />
    </button>
  );
};

export default Menuicon;
