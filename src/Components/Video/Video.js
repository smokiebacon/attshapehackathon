import React, { Component } from "react";
import "./Video.css"
import Bet from '../Bet/Bet'
import DashBoardBet from '../DashboardBet/DashboardBet'

export default class Video extends Component {
  render() {
    return (
      <div className="video__main-container">

        <div className="active__bets">
          Active Bets
          <DashBoardBet />
        </div>


        <div className="video__video-container">
          <iframe
            title="Video"
            src="https://player.twitch.tv/?channel=riotgamesbrazil"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
            height="700px"
            width="100%"
          />
          <Bet />
        </div>
        <div className="video__chat">
          <iframe
            title="Chat"
            src="https://www.twitch.tv/embed/riotgamesbrazil/chat"
            frameBorder="0"
            scrolling="no"
            height="100%"
            width="100%"
          />
        </div>

      </div>

    );
  }
}
