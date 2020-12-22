import Obfuscate from 'react-obfuscate';
import content from '../content';
import '../styles/Section.scss';
import '../styles/Contact.scss';

function Contact(props) {
  return (
    <section className="container">
      <div className="title">
        <h2>{content[props.lang].navigation[4]}</h2>
      </div>
      <div className="contact wrapper">
        <h3>{content[props.lang].contact}</h3>
        <div className="media-wrapper">
          <Obfuscate
            href="https://github.com/EriBloo"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <i className="icon fab fa-github-square" />
          </Obfuscate>
          <Obfuscate email="lprzybyslawski@gmail.com">
            <i className="icon fas fa-envelope" />
          </Obfuscate>
          <Obfuscate
            href="https://www.facebook.com/profile.php?id=100004309728040"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <i className="icon fab fa-facebook-square" />
          </Obfuscate>
        </div>
      </div>
    </section>
  );
}

export default Contact;
