import logo from "../logo.png";
import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          <span
            style={{
              marginLeft: 15,
              fontWeight: 300,
              letterSpacing: 5,
            }}
          >
            tibby
          </span>
        </a>
        {/* <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Communities
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                FAQ
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
