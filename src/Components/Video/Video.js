import React, { Component } from "react";

export default class Video extends Component {
  render() {
    return (
      <div>
        <iframe
          title="Video"
          src="https://player.twitch.tv/?channel=lilypichu"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
          height="378"
          width="620"
        />
        <iframe
          title="Chat"
          src="https://www.twitch.tv/embed/lilypichu/chat"
          frameborder="0"
          scrolling="no"
          height="500"
          width="350"
        />
      </div>
    );
  }
}
