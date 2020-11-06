import '../styles/About.scss';
import avatar from '../avatar.png';

function About() {
  return (
    <div className="about">
      <div className="title">
        <h1>ŁUKASZ PRZYBYSŁAWSKI</h1>
        <h2>Junior Front-End Developer</h2>
      </div>
      <img src={avatar} alt="" className="avatar" />
    </div>
  )
}

export default About;
