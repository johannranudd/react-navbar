import React from 'react';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

const Icons = () => {
  return (
    <div className='icons-container'>
      <a href='#'>
        <BsFacebook />
      </a>
      <a href='#'>
        <AiOutlineTwitter />
      </a>
      <a href='#'>
        <BsLinkedin />
      </a>
      <a href='#'>
        <BsGithub />
      </a>
    </div>
  );
};

export default Icons;
