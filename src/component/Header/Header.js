import React, { Component } from 'react'
import './Header.css';
import logo from '../../assets/images/logo.png';


class Header extends Component {
  render() {
    return (
      
  <div className="header">
   <nav class="navbar navbar-expand-lg navbar-light ">  
       
  <button class="navbar-toggler" type="button btn-dark" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="btn btn-dark navbar-toggler-icon"></span>
  </button>
  
  <div>
  <img src={logo}  alt="Smiley face" height="60" width="250"  />
  </div>    
  
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"> 
      <div class="btn-group hori">
  <button type="button" class="btn expand" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu back">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
   
  </div>
</div>  
    </li>
    <li>
    <div class="btn-group hori">
  <button type="button" class="btn expand" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Players
  </button>
  <div class="dropdown-menu back">
    <a class="dropdown-item" href="#">Game Setting</a>
    <a class="dropdown-item" href="#">Game Setting</a>
    <a class="dropdown-item" href="#">Game Setting</a>
    <a class="dropdown-item" href="#">Game Setting</a>

  </div>
    </div>
      </li>
    </ul>
    
  </div>
</nav>
      </div>
    )
  }
}

export default Header;
