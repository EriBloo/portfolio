import weatherAppImg from "../images/weather-app.png";
import "../styles/Section.scss";
import "../styles/Works.scss";

function Works() {
  return (
    <section className="container">
      <div className="title">
        <h2>Works</h2>
      </div>
      <div className="works wrapper">
        <div className="work">
          <img src={weatherAppImg} alt="Weather-app" />
          <div className="overlay">
            <a
              href="https://github.com/EriBloo/weather-app"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              {"< />"}
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
        <div className="work"></div>
        <div className="work"></div>
      </div>
    </section>
  );
}

export default Works;
