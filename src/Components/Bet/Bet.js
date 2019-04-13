import React, { Component } from "react";
import './Bet.css';

export default class Bet extends Component {
    state = {
        teamAValue: 0.00,
        teamAPool: 0.00,
        teamAMine: 0.00,
        teamBValue: 0.00,
        teamBPool: 0.00,
        teamBMine: 0.00,
        winEstimate: 0.00
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="bet">
                <h1 className="bet__title">Current Bets</h1>

                <div className="bet__teamA bet__team">
                    <h2 className="bet__team__title">TeamA</h2>
                    <h3 className="bet__team__pool">Pool: ${this.state.teamAPool}</h3>
                    <h3 className="bet__team__mine">My Bet: ${this.state.teamAMine}</h3>
                    <div className="bet__team__input">
                        $<input type="number" name="teamAValue" value={this.state.teamAValue} onChange={this.handleChange}min="0.01" step="0.01" max="100.00"></input>
                    </div>
                    <button class="bet__team__btn">Bet</button>
                </div>

                <div className="bet__teamB bet__team">
                    <h2 className="bet__team__title">TeamB</h2>
                    <h3 className="bet__team__pool">Pool: ${this.state.teamBPool}</h3>
                    <h3 className="bet__team__mine">My Bet: ${this.state.teamBMine}</h3>
                    <div className="bet__team__input">
                        $<input type="number" name="teamAValue" value={this.state.teamBValue} onChange={this.handleChange}min="0.01" step="0.01" max="100.00"></input>
                    </div>
                    <button class="bet__team__btn">Bet</button>
                </div>

                <div className="bet__stats">
                    <h2 className="bet__stats__spread--title">Spread/Odds</h2>
                    <h3 className="bet__stats__spread--stats">7:3</h3>
                    <h2 className="bet__stats__win--title">Est. Win Amount</h2>
                    <h3 className="bet__stats__win--total">{this.state.winEstimate}</h3>
                </div>
            </div>
        );
    }
}
