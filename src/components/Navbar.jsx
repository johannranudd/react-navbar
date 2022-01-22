import React, { useEffect, useRef, useState } from 'react';
import { StyledNav } from './Navbar.styles';
import Menu from './Menu';
import Icons from './Icons';
import Menuicon from './Menuicon';
import { IoLogoGitlab } from 'react-icons/io5';

const Navbar = ({ screenWidth }) => {
  const [showMenu, setShowMenu] = useState(false);
  const reference = useRef(null);

  const handleClick = () => {
    setShowMenu(!showMenu);
    change();
  };
  function change() {
    if (showMenu && screenWidth < 768) {
      reference.current.style.height = '16.8rem';
    } else {
      reference.current.style.height = '5rem';
    }
  }

  useEffect(() => {
    if (screenWidth > 768) {
      setShowMenu(false);
    }
    change();
  }, [screenWidth, showMenu]);

  return (
    <StyledNav ref={reference}>
      <section className='wrapper'>
        <div className='logo'>
          <a href='#'>
            <IoLogoGitlab className='logo-icon' />
          </a>
        </div>
        <Menu />
        <Icons />
        <Menuicon handleClick={handleClick} />
      </section>
    </StyledNav>
  );
};

export default Navbar;
