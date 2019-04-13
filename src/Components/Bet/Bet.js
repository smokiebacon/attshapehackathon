import React, { Component } from "react";

export default class Bet extends Component {
    render() {
        return (
            <div className="bet">
                <h1 className="bet__title">Current Bets</h1>

                <div className="bet__teamA bet__team">
                </div>

                <div className="bet__teamB bet__team">
                </div>

                <div className="bet__stats">
                </div>
            </div>
        );
    }
}
