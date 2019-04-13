import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Register extends Component {
  state = {
    email: "",
    name: "",
    password: "",
  };

  doHandleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  doHandleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
    };

    try {
      const loginResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/users`,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText);
      }
      const parseResponse = await loginResponse.json();
      if (parseResponse.message === "Registration successful.") {
        this.props.history.push(`/dashboard`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.doHandleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.doHandleInput}
            required
          />
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
          <button>Click here to sign up!</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
