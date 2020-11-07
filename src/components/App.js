import Navigation from './Navigation';
import Home from './Home';
import Skills from './Skills';
import Works from './Works';
import About from './About';
import Contact from './Contact';
import '../styles/App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <Skills />
      <Works />
      <About />
      <Contact />
    </div>
  );
}

export default App;
