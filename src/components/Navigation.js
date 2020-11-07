import { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import '../styles/Navigation.scss';

function Navigation() {
  const [current, setCurrent] = useState(null); // current element with class .current
  const [height, setHeight] = useState(0); // where we are on the page, currentScroll / innerHeight
  const scrollY = useScrollPosition(60);

  function toggleCurrentClass(element) {
    element.classList.toggle('current');
  }

  function scroll({ currentTarget }) {
    window.scrollTo(0, parseInt(currentTarget.id, 10) * window.innerHeight);
  }

  useEffect(() => {
    // toggles .current class to element in view
    const newElement = document.getElementById(`${height}`);
    if (current) {
      toggleCurrentClass(current);
    }
    toggleCurrentClass(newElement);
    setCurrent(newElement);
  }, [height]);

  useEffect(() => {
    // changes current height
    setHeight(Math.floor(scrollY / window.innerHeight));
  }, [scrollY]);

  return (
    <nav className="navigation">
      <div className="nav-point-wrapper" id="0" onClick={scroll}>
        <h2>Home</h2>
      </div>
      <div className="nav-point-wrapper" id="1" onClick={scroll}>
        <h2>Skills</h2>
      </div>
      <div className="nav-point-wrapper" id="2" onClick={scroll}>
        <h2>Works</h2>
      </div>
      <div className="nav-point-wrapper" id="3" onClick={scroll}>
        <h2>About</h2>
      </div>
      <div className="nav-point-wrapper" id="4" onClick={scroll}>
        <h2>Contact</h2>
      </div>
    </nav>
  );
}

export default Navigation;
