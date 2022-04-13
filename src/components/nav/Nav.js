import "./Nav.css";
import background from "../../assets/react.jpg";
import github_icon from "../../assets/github-square-brands.svg";
import linkedin_icon from "../../assets/github-square-brands.svg";


function Nav() {
  return (
    <nav>
      <img className="img-container" src={background} alt=""/>
        <h1 className="smaller-font">Hi, I am Oleh Smirnov</h1>
        <h1 className="bigger-font">
          <a className="text-react animate__animated animate__bounceInLeft" href="https://www.reactjs.org">React.js</a>
          developer
        </h1>
      <img src={github_icon} alt="My GitHub profile" title="My GitHub profile"/>
      <img src={linkedin_icon} alt="My LinkedIn profile" title="My LinkedIn profile"/>
      <img src={github_icon} alt="My LinkedIn profile" title="My LinkedIn profile"/>
    </nav>
  );
}

export default Nav;