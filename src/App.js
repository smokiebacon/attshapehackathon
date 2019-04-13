import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Video from "./Components/Video/Video";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Bet from './Components/Bet/Bet';

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

      const parsedResponse = await loginResponse.json();
      if (parsedResponse.message === "login successful") {
        //Resets this component's state if a use was successfully logged in
        this.setState({
          loggedUser: parsedResponse.data,
        });

        this.props.history.push(`/dashboard`);
      } else {
        this.setState({
          loginError: parsedResponse.message,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  doLogoutUser = async user => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/logout`,
      );
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        console.log(response);
      }
      const deletedSession = await response.json();
      this.setState({
        loggedUser: deletedSession.user || {},
      });
      this.props.history.push("/login");
    } catch (err) {
      console.log(err);
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
          <Route exact path="/bet" component={() => <Bet />} />
          <Route exact path="/live-match" component={() => <Video />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
