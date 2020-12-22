import weatherAppImg from '../images/weather-app.png';
import lotrImg from '../images/lotr.jpg';
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
          <img src={lotrImg} alt="Middle-earth map" />
          <div className="overlay">
            <a
              href="https://github.com/EriBloo/interactive-middle-earth-map"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              {'< />'}
            </a>
            <a
              href="https://interactive-middle-earth-map.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="description"
            >
              {content[props.lang].works[0]}
            </a>
          </div>
        </div>
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
