import { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Skills from './Skills';
import Works from './Works';
import About from './About';
import Contact from './Contact';
import '../styles/App.scss';

function App() {
  const [language, setLanguage] = useState('EN');

  function changeOpacity() {
    // changes opacity of ::before and ::after of .language div to toggle between displayed values
    const newValue = getComputedStyle(document.documentElement).getPropertyValue('--op');
    document.documentElement.style.setProperty('--op', 1 - newValue);
  }

  function toggleLanguage() {
    changeOpacity();
    setLanguage(language === 'EN' ? 'PL' : 'EN');
  }

  return (
    <div className="app">
      <Navigation lang={language} />
      <Home lang={language} />
      <Skills lang={language} />
      <Works lang={language} />
      <About lang={language} />
      <Contact lang={language} />
      <div className="language" onClick={toggleLanguage} />
    </div>
  );
}

export default App;
