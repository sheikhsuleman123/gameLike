import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      
      <div >

   <nav class="navbar navbar-expand-lg navbar-light bg-light ">  
       
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
       <span className="logo">gamelike</span>
           
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Guide <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Players</a>
      </li>
    </ul>
    
  </div>
</nav>
      </div>
    )
  }
}

export default Header;
