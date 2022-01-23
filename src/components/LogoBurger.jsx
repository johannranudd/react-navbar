import React from 'react';
import { SiGitlab } from 'react-icons/si';
import { FiMenu } from 'react-icons/fi';
import SocialIcons from './SocialIcons';

const LogoBurger = ({ handleClick }) => {
  return (
    <div className='logo-burger-container'>
      <div className='logo'>
        <SiGitlab />
      </div>
      <button className='burger' onClick={handleClick}>
        <FiMenu />
      </button>
      <SocialIcons />
    </div>
  );
};

export default LogoBurger;
