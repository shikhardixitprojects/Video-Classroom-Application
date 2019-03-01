import React, { Component } from 'react';
import { VideoStreamApi } from '../lib/SocketApi';
import './Videos.css';


class Videos extends Component {

  constructor() {
    super();

    this.state = {
      videoSrc:"",
    }
  }

  componentDidMount() {
    const messenger = new VideoStreamApi()

    if( this.props.streams==="video"){
      messenger.setVideoStreamListener(function(image) {
        this.setState({videoSrc:image})
      }, this)
    }
    else if(this.props.streams==="screen"){
      messenger.setScreenshareListener(function(image) {
        this.setState({videoSrc:image})
      }, this)
    }
    }


  render(){
      return(
          <div className="right">
                  <h6>{this.props.streams === "video" ? "Video Stream" : "Screenshare" }</h6>
                  <img src={this.state.videoSrc} />
          </div>
      )
  }
}

export default Videos
