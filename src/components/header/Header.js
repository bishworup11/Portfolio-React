import React from 'react'
import './header.css';
import logo from '../img/logo.png';
import navbarIcon from '../img/navbar1.png';


export default function Header() {

    function ClickNavbar() {
        let displayNone = document.getElementsByClassName("displayNone");
      
        if (
          displayNone[0].style.display === "none" ||
          displayNone[0].style.display === ""
        ) {
          displayNone[0].style.display = "flex";
          displayNone[1].style.display = "flex";
          displayNone[2].style.display = "flex";
        //   displayNone[].style.display = "flex";
          // writeMessage.textContent="Submit"
        } else {
          displayNone[0].style.display = "none";
          displayNone[1].style.display = "none";
          displayNone[2].style.display = "none";
        //   displayNone[3].style.display = "none";
        }
      }
      

  return (
    <header className="flex-container navbar-style">
      <div>
        <a className="log" href="index.html">
          <img height="50px" src={logo} alt="Home page" />
        </a>
      </div>
      <nav>
        <ul className="flex-container displayNone">
          <li className="nav-item">
            <a href="#about" title="about"> About</a>
          </li>
          <li className="nav-item">
            <a href="#experience" title="Experience"> Experience</a>
          </li>
          <li className="nav-item">
            <a href="#feature-project" title="Project"> Project</a>
          </li>
          <li className="nav-item">
            <a href="#contact" title="Contact"> Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex-container">
        <span className="button displayNone"><a href="#">Resume</a></span>
        <span className="button displayNone"><a href="#">Hire Me</a></span>
        <span onClick={ClickNavbar} className="navbarhide" style={{padding: 'px'}} >
          <img height="40px" src={navbarIcon} alt="hide" />
        </span>
      </div>
    </header>
  )
}
