import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// import Video from "./Components/Video/Video";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
class App extends Component {
  state = {
    loggedUser: {},
  };

  doLoginUser = async user => {
    try {
      const loginResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText);
      }
      const parseResponse = await loginResponse.json();
      if (parseResponse.message === "Login successful.") {
        this.setState({
          loggedUser: parseResponse.data,
        });
        this.props.history.push(`/dashboard`);
      } else {
        this.setState({
          loginError: parseResponse.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/login"
            component={() => <Login doLoginUser={this.doLoginUser} />}
          />
          <Route exact path="/register" component={() => <Register />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
