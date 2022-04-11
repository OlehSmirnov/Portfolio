import "./Nav.css";
import background from "../../assets/react.jpg"

function Nav() {
  return (
    <nav>
      <img className="img-container" src={background} alt=""/>
        <h2>Hi, I am Oleh Smirnov</h2>
        <h1>
          <a className="text-react animate__animated animate__bounceInLeft" href="https://www.reactjs.org">React.js</a>
          developer
        </h1>
    </nav>
  );
}

export default Nav;