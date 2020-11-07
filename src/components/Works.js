import weatherAppImg from '../images/weather-app.png';
import simplyDoImg from '../images/simply-do.png';
import pokemonGameImg from '../images/pokemon-game.png';
import '../styles/Section.scss';
import '../styles/Works.scss';

function Works() {
  return (
    <section className="container">
      <div className="title">
        <h2>Works</h2>
      </div>
      <div className="works wrapper">
        <div className="work">
          <img src={weatherAppImg} alt="Weather App" />
          <div className="overlay">
            <a
              href="https://github.com/EriBloo/weather-app"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              {'< />'}
            </a>
            <a
              href="https://eribloo.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
              className="description"
            >
              Weather App created with React, React Router and various APIs.
            </a>
          </div>
        </div>
        <div className="work">
          <img src={simplyDoImg} alt="To-Do List" />
          <div className="overlay">
            <a
              href="https://github.com/EriBloo/To-Do-List"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              {'< />'}
            </a>
            <a
              href="https://simply-do-56272.web.app/"
              target="_blank"
              rel="noreferrer"
              className="description"
            >
              To-Do List created with plain javascript that uses Firebase
              Database and Authentication.
            </a>
          </div>
        </div>
        <div className="work">
          <img src={pokemonGameImg} alt="Memory Game" />
          <div className="overlay">
            <a
              href="https://github.com/EriBloo/Memory-card"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              {'< />'}
            </a>
            <a
              href="https://eribloo.github.io/Memory-card/"
              target="_blank"
              rel="noreferrer"
              className="description"
            >
              Simple memory game created with React.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
