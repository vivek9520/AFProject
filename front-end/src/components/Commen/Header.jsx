import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="container-flute">
        <header>

      <nav class="navbar navbar-expand-md navbar-dark fixed-top nav-color ">
      <Link to ="/"  ><a class="navbar-brand" href="#">Compliant Pack</a></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">My Compliant <span class="sr-only">(current)</span></a>
            </li>
            
            
          </ul>
          <form class="form-inline mt-2 mt-md-0">
        
         <Link to ="/login"><a class="nav-link" href="#">Login <span class="sr-only">(current)</span></a></Link>
          </form>
        </div>
      </nav>
    </header> 
            </div>
        )
    }
}
