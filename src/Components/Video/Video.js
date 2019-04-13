import React, { Component } from "react";
import "./Video.css"


export default class Video extends Component {
  render() {
    return (
      <div className="video__main-container">
        <h1>This is the LiveMatch!</h1>
        <div className="video__video-container">
          <iframe
            title="Video"
            src="https://player.twitch.tv/?channel=lck"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
            height="500px"
            width="800px"
          />
        </div>

        <div className="video__chat-container">
          <iframe
            title="Chat"
            src="https://www.twitch.tv/embed/lck/chat"
            frameBorder="0"
            scrolling="no"
            height="500"
            width="350"
          />
        </div>
      </div>
    );
  }
}
