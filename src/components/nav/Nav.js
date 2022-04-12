import "./Nav.css";
import background from "../../assets/react.jpg"

function Nav() {
  return (
    <nav>
      <img className="img-container" src={background} alt=""/>
        <h1 className="smaller-font">Hi, I am Oleh Smirnov</h1>
        <h1 className="bigger-font">
          <a className="text-react animate__animated animate__bounceInLeft" href="https://www.reactjs.org">React.js</a>
          developer
        </h1>
    </nav>
  );
}

export default Nav;