import React, { useState } from 'react';
import { StyledNav } from './Navbar.styles';
import Menu from './Menu';
import Icons from './Icons';
import Menuicon from './Menuicon';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const inlineStyle = (a, b) => {
    if (showMenu) {
      return { height: a };
    } else {
      return { height: b };
    }
  };

  return (
    <StyledNav style={inlineStyle('250px', '5rem')}>
      <section className='wrapper'>
        {/* logo */}
        <h2>logo</h2>
        {/* menu */}
        <Menu />
        {/* icons */}
        <Icons />
        {/* menu-burger */}
        <Menuicon handleClick={handleClick} />
      </section>
    </StyledNav>
  );
};

export default Navbar;

// const StyledMotionNav = motion(StyledNav);

// const headerVariant = {
//   initial: {
//     height: 80,
//   },
//   animate: {
//     height: 200,
//   },
//   exit: {
//     height: 80,
//   },
// };
