import htmlIcon from '../images/html.png';
import sassIcon from '../images/sass.png';
import jsIcon from '../images/js.png';
import reactIcon from '../images/react.png';
import npmIcon from '../images/npm.png';
import webpackIcon from '../images/webpack.svg';
import '../styles/Skills.scss';

function Skills() {
  return (
    <div className="skills">
      <div className="skill-title">
        <h2>Skills</h2>
      </div>
      <div className="skills-wrapper">
        <div className="skill"><img src={htmlIcon} alt="html5"/></div>
        <div className="skill"><img src={sassIcon} alt="Sass"/></div>
        <div className="skill"><img src={jsIcon} alt="JS"/></div>
        <div className="skill"><img src={reactIcon} alt="React"/></div>
        <div className="skill"><img src={npmIcon} alt="npm"/></div>
        <div className="skill"><img src={webpackIcon} alt="Webpack"/></div>
      </div>
    </div>
  )
}

export default Skills;
