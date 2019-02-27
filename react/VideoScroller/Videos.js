import React, { Component } from 'react';
import { VideoStreamApi } from '../lib/SocketApi';
import './Videos.css';

class Videos extends Component {

  constructor() {
    super();

    this.state = {
      videoSrc:""
    }
  }

  componentDidMount() {
    const messenger = new VideoStreamApi()
    messenger.setVideoStreamListener(function(image) {
      this.setState({videoSrc:image})
    }, this)
  }

  render(){
      return(
          <div className="right">
                  <h3>Video Title Here</h3>
                  <p>Short description</p>
                  <img src={this.state.videoSrc} />
          </div>
      )
  }
}

export default Videos
