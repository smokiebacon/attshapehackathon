import React, { Component } from 'react';
import './Earnings.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="earnings">
                <div className="earnings__earnings totals-box">
                    <h3 className="totals-box__title">Earnings:</h3>

                    <ul className="totals-box__toggle">
                        <li><a href="#">Week</a></li>
                        <li><a href="#">Month</a></li>
                        <li><a href="#">Total</a></li>
                    </ul>

                    <div className="totals-box__total">
                        <h2>$3922.23</h2>
                    </div>

                    <button className="totals-box__btn">Cash Out</button>
                </div>

                <div className="earnings__bets totals-box">
                    <h3 className="totals-box__title">Bets:</h3>

                    <ul className="totals-box__toggle">
                        <li><a href="#">Week</a></li>
                        <li><a href="#">Month</a></li>
                        <li><a href="#">Total</a></li>
                    </ul>

                    <div className="totals-box__total">
                        <h2>$1829.21</h2>
                    </div>

                    <button className="totals-box__btn">Cash Out</button>
                </div>

                <div className="earnings__graph">
                    This is graph.
                </div>
            </div>
        );
    }
}
  