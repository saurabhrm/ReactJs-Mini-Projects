import './App.css';

import React, {useState} from 'react';
import ThemeContext from './Contaxt/ThemeContext';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';

function App() {
  const themeHook = useState ("light")

  return (
    
  <ThemeContext.Provider value={themeHook}>
    <div>
      <Header/>
      <HeroSection/>
    </div>
    </ThemeContext.Provider>   
    
  );
}

export default App;
