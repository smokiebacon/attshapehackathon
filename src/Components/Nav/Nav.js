import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  state = {
    loggedIn: false,
  };

  handleClick = () => {
    if (this.state.loggedIn === false) {
      this.setState(state => ({ loggedIn: true }));
    } else {
      this.setState(state => ({ loggedIn: false }));
    }
  };

  render() {
    const links = !this.state.loggedIn ? (
      <nav className="ul__nav--logging">
        <Link to="/login" className="ul__nav--link">
          Login
        </Link>
        <Link to="/register" className="ul__nav--link">
          Register
        </Link>
      </nav>
    ) : (
      <nav className="ul__nav--logging">
        <Link to="/dashboard" className="ul__nav--link">
          Logout
        </Link>
      </nav>
    );

    return (
      <div className="ul">
        <h2 className="ul__nav--link">LOGO</h2>
        <nav>
          <Link to="/dashboard" className="ul__nav--link">
            Browse
          </Link>
          <Link to="/earning" className="ul__nav--link">
            Earning
          </Link>
          <input type="text" placeholder="Search" className="ul__nav--link" />
        </nav>
        {links}
        {/* Remove this when needed */}
        <button onClick={this.handleClick}>LOGGEDIN/LOGGEDOUT</button>
      </div>
    );
  }
}

export default Nav;
