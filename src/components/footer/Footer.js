import React from 'react';
import "./Footer.css";
import github_icon from "../../assets/github-square-brands.svg";
import linkedin_icon from "../../assets/linkedin-brands.svg";
import email_icon from "../../assets/envelope-solid.svg";
import viber_icon from "../../assets/viber-brands.svg";

function Footer() {
  return (
    <footer>
      <h1>Made with❤️by me</h1>
      <div className="container-footer-links">
        <a href="https://github.com/OlehSmirnov">
          <img className="icon" src={github_icon} alt="My GitHub profile" title="My GitHub profile"/>
        </a>
        <a href="https://linkedin.com/in/oleh-smirnov">
          <img className="icon" src={linkedin_icon} alt="My LinkedIn profile" title="My LinkedIn profile"/></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=oleg0031@gmail.com">
          <img className="icon" src={email_icon} alt="My Gmail" title="My Gmail"/>
        </a>
        <a href="viber://chat?number=%2B380975032486">
          <img className="icon" src={viber_icon} alt="My Viber" title="My Viber"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;