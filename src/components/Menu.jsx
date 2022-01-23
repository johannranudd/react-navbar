import React, { useEffect, useRef } from 'react';
import { links } from '../Data';
const Menu = ({ showMenu }) => {
  const menuRef = useRef(null);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    const menuHeight = menuRef.current.getBoundingClientRect().height;
    if (showMenu) {
      menuContainerRef.current.style.height = `${menuHeight}px`;
    } else {
      menuContainerRef.current.style.height = '0px';
    }
  }, [showMenu]);
  return (
    <div className='menu-wrapper' ref={menuContainerRef}>
      <ul className='menu' ref={menuRef}>
        {links.map((item) => {
          const { id, url, text } = item;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
