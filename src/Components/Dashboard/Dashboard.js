import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

class Dashboard extends Component {
    state = {
        search: ''
    }

    doHandleInput = (e) => {
        this.setState({
            [e.target.name]:  e.target.value
        })
    }

    render() {
        return (
            <div className="dashboard__maincontainer">
                <div className="dashboard__userprofile--container">
                    <div className="dashboard__userprofile">
                        <div className="dashboard__userprofile--info">
                            <img className="dashboard__userprofile--img" alt="" src=""></img>
                            <div className="dashboard__userprofile--links">CHART HERE</div>
                            <div className="dashboard__userprofile--links">BETS HERE</div>
                        </div>
                    </div>
                    <div className="dashboard__userprofile">
                        <input className="dashboard__userprofile--searchbar" name="search" placeholder="Search"></input>
                        <div className="dashboard__userprofile--pictures">
                            <Link to='/stats'>
                            
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" /></Link>
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551771825-1607dd0ad791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551728339-499b333c5c43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551854386-b42759a60dd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551833726-b6549cd73566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1551838030-f478473c9f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                            <img className="dashboard__userprofile--pictures1" alt="" src="https://images.unsplash.com/photo-1483323323858-4916bde7bd5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;