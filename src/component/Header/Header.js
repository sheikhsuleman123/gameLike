import React, { Component } from 'react'
import './Header.css';
import logo from '../../assets/images/logo.png';


class Header extends Component {
  render() {
    return (
      
  <div className="header">
   <nav class="navbar navbar-expand-lg navbar-light ">  
       
  <button class="navbar-toggler" type="button btn-dark" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="btn navbar-toggler-icon"></span>
  </button>
  
  <div  className="navbar-brand navbar-brand-centered">
  <img src={logo}  alt="Smiley face" height="45" width="230"  />
  </div>     
  
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    <li>
      
    <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Players
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Game Setting</a>
          <a class="dropdown-item" href="#">Game Setting </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Game Setting</a>
        </div>
      </li>
      </li>
    </ul>
    
  </div>
</nav>
      </div>
    )
  }
}

export default Header;
