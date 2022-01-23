import React, { useEffect, useRef, useState } from 'react';
import { StyledNav } from './Navbar.styles';

import Menu from './Menu';
import LogoBurger from './LogoBurger';
import SocialIcons from './SocialIcons';

const Navbar = ({ screenWidth }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <StyledNav>
      <section className='wrapper'>
        <LogoBurger handleClick={handleClick} />
        {/* <SocialIcons /> */}
        <Menu showMenu={showMenu} />
      </section>
    </StyledNav>
  );
};

export default Navbar;
