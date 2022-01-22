import Navbar from './components/Navbar';
import { GlobalStyle } from './App.styles';
import { useEffect, useState } from 'react';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [screenWidth]);

  return (
    <>
      <GlobalStyle />
      <Navbar screenWidth={screenWidth} />
    </>
  );
}

export default App;
