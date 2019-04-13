import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  doHandleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  doHandleSubmit = e => {
    e.preventDefault();
    this.props.doLoginUser(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.doHandleSubmit}>
          <input
            placeholder="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.doHandleInput}
            required
          />
          <input
            placeholder="password"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.doHandleInput}
            required
          />
          <button>Click here to login!</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
