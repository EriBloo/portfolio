import { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import content from '../content';
import '../styles/Navigation.scss';

function Navigation(props) {
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
      // if current exists disable .current class on it
      toggleCurrentClass(current);
    }
    toggleCurrentClass(newElement);
    setCurrent(newElement);
  }, [height]);

  useEffect(() => {
    // changes current height, clamps output between 0 and 4
    setHeight(Math.min(Math.max(Math.floor(scrollY / (window.innerHeight)), 0), 4));
  }, [scrollY]);

  return (
    <nav className="navigation">
      <div className="nav-point-wrapper" id="0" onClick={scroll}>
        <h2>{content[props.lang].navigation[0]}</h2>
      </div>
      <div className="nav-point-wrapper" id="1" onClick={scroll}>
        <h2>{content[props.lang].navigation[1]}</h2>
      </div>
      <div className="nav-point-wrapper" id="2" onClick={scroll}>
        <h2>{content[props.lang].navigation[2]}</h2>
      </div>
      <div className="nav-point-wrapper" id="3" onClick={scroll}>
        <h2>{content[props.lang].navigation[3]}</h2>
      </div>
      <div className="nav-point-wrapper" id="4" onClick={scroll}>
        <h2>{content[props.lang].navigation[4]}</h2>
      </div>
    </nav>
  );
}

export default Navigation;
