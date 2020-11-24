import weatherAppImg from '../images/weather-app.png';
import simplyDoImg from '../images/simply-do.png';
import pokemonGameImg from '../images/pokemon-game.png';
import battleshipGameImg from '../images/battleship.png';
import content from '../content';
import '../styles/Section.scss';
import '../styles/Works.scss';

function Works(props) {
  return (
    <section className="container">
      <div className="title">
        <h2>{content[props.lang].navigation[2]}</h2>
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
              {content[props.lang].works[0]}
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
              {content[props.lang].works[1]}
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
              {content[props.lang].works[2]}
            </a>
          </div>
        </div>
        <div className="work">
          <img src={battleshipGameImg} alt="Memory Game" />
          <div className="overlay">
            <a
              href="https://github.com/EriBloo/battleship"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              {'< />'}
            </a>
            <a
              href="https://eribloo.github.io/battleship/"
              target="_blank"
              rel="noreferrer"
              className="description"
            >
              {content[props.lang].works[3]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
