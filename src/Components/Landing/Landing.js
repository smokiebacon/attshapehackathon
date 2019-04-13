import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

class Landing extends Component {
  
    changeHandler = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
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
                            <Link to='/live-match'>
                                <img className="dashboard__userprofile--pictures1" alt="League of Legends" src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-188x250.jpg" />
                                <h6>League of Legends</h6>
                            </Link>
                            <Link to='/fortnight'>
                                <img className="dashboard__userprofile--pictures1" alt="Fortnite" src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-188x250.jpg" />
                            <h6>Fortnite</h6>
                            </Link>
                            <Link to ='/apexlegends'>
                                <img className="dashboard__userprofile--pictures1" alt="Apex Legends" src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-188x250.jpg" />
                                <h6>Apex Legends</h6>
                            </Link>
                            <Link to="/cs:go">
                                <img className="dashboard__userprofile--pictures1" alt="Counter-Strike:Global Offensive" src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg" />
                                <h6>Counter-Strike: Global Offensive</h6>
                            </Link>
                            <Link to ="/hearthstone">
                                <img className="dashboard__userprofile--pictures1" alt="" src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg" />
                                <h6>Hearthstone</h6>
                            </Link>
                            <Link to ="/dota2">
                                <img className="dashboard__userprofile--pictures1" alt="" src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg" />
                                <h6>Dota 2</h6>
                            </Link>
                            <Link to ="/overwatch">
                                <img className="dashboard__userprofile--pictures1" alt="" src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg" />
                                <h6>Overwatch</h6>
                            </Link>
                            <Link to ="/starcraft2">
                                <img className="dashboard__userprofile--pictures1" alt="" src="https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-285x380.jpg" />
                                <h6>Starcraft 2</h6>
                            </Link>
                            <Link to ="/division2">
                                <img className="dashboard__userprofile--pictures1" alt="" src="https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20The%20Division%202-285x380.jpg" />
                                <h6>Tom Clancy's Division 2</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;