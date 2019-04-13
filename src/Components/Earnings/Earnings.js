import React, { Component } from 'react';
import './Earnings.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="earnings">
                <div className="earnings__earnings totals-box">
                    <h2 className="totals-box__title">Earnings:</h2>

                    <div className="totals-box__toggle">
                        <h2>Week</h2>
                        <h2>Month</h2>
                        <h2>Total</h2>
                    </div>

                    <div className="totals-box__total">
                        $3922.23
                    </div>

                    <button className="totals-box__btn">Cash Out</button>
                </div>

            </div>
        );
    }
}
  