import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      
      <div className="header">
   <nav class="navbar navbar-expand-lg ">  
       
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div>
  <img src="" class="img-fluid img-thumbnail" alt="Smiley face" height="42" width="42" />
       <span className="logo">gamelike</span>
       </div>    
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <div class="btn-group">
  <button type="button" class="btn nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Guide
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Game Setting</a>
  </div>
    </div>
    <div class="btn-group">
  <button type="button" class="btn nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Players
  </button>
  <div class="dropdown-menu">
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
