import Navigation from './Navigation';
import Home from './Home';
import Skills from './Skills';
import Works from './Works';
import About from './About';
import '../styles/App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <Skills />
      <Works />
      <About />
    </div>
  );
}

export default App;
