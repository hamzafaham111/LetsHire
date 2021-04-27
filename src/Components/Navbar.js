import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>
{
    return(<>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
      <span>Let's Hire</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link className="link" to="/home">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="link" to="/catogries">Catogries</Link>
            </li>
          </ul>
        <div className="profile"> <Link className="link" to="/register">Login</Link></div>
      </div>
    </nav>
    </>)
}
export default Navbar;