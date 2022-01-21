import React, { useState } from 'react';
import { StyledNav } from './Navbar.styles';
import Menu from './Menu';
import Icons from './Icons';
import Menuicon from './Menuicon';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledNav style={showMenu ? { height: '250px' } : { height: '5rem' }}>
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
