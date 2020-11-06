import '../styles/Home.scss';
import avatar from '../images/avatar.png';

function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <h1>ŁUKASZ PRZYBYSŁAWSKI</h1>
        <h2>Junior Front-End Developer</h2>
      </div>
      <img src={avatar} alt="" className="avatar" />
    </div>
  )
}

export default Home;
