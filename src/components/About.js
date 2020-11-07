import '../styles/Section.scss';
import '../styles/About.scss';

function About() {
  return (
    <section className="container">
      <div className="title">
        <h2>About</h2>
      </div>
      <div className="about wrapper">
        <p>
          Pochodzę z Gniezna, a aktualnie mieszkam w Płocku, dokąd
          przeprowadziłem się ze względu na pracę.
        </p>
        <p>
          Kilka miesięcy temu postanowiłem zmienić swoją dotychczasową pracę
          lekarza weterynarii i zacząłem rozwijać swoją pasję. Początkowo
          zacząłem od Pythona, a aktualnie korzystam z HTML, SaSS, Javascriptu
          oraz Reacta. W przyszłości chciałbym poszerzyć umiejętności o Back-End
          i dążyć w kierunku Full-Stack Developera.
        </p>
        <p>
          W wolnym czasie lubię pograć w planszówki ze znajomymi lub w gry
          komputerowe (głównie RPG). Interesują mnie także nowe technologie i
          nauka, szczególnie związana z astronomią.
        </p>
        <p>
          Uwielbiam szukać rozwiązań problemów i uczyć się nowych rzeczy oraz ich zastosowania.
        </p>
      </div>
    </section>
  );
}

export default About;
