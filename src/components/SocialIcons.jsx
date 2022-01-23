import React from 'react';
import { social } from '../Data';

const SocialIcons = () => {
  return (
    <div className='social-icon-container'>
      {social.map((item) => {
        const { id, url, icon } = item;
        return (
          <a href={url} key={id}>
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
