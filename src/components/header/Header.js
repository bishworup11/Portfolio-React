import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/'> <img height="50px" src={logo} alt="Home page" /></Link>
      </div>
      <nav>
        <ul className="flex-container displayNone">
        <li className="nav-item">
          <Link to='/fetchquote'>FetchQuote</Link>
          </li>
          <li className="nav-item">
          <Link to='/fetchdata'>FetchData</Link>
          </li>
          <li className="nav-item">
          <Link to='/about'>About</Link>
          </li>
          <li className="nav-item">
            <Link to='/Experience'>Experience</Link>
          </li>
          <li className="nav-item">
            
            <Link to='/Project'>Project</Link>
          </li>
          <li className="nav-item">
          
            <Link to='/Contact'>Contact</Link>
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
