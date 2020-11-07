import content from '../content';
import '../styles/Section.scss';
import '../styles/About.scss';

function About(props) {
  return (
    <section className="container">
      <div className="title">
        <h2>About</h2>
      </div>
      <div className="about wrapper">
        <p>
          {content[props.lang].about[0]}
        </p>
        <p>
          {content[props.lang].about[1]}
        </p>
        <p>
          {content[props.lang].about[2]}
        </p>
        <p>
          {content[props.lang].about[3]}
        </p>
      </div>
    </section>
  );
}

export default About;
