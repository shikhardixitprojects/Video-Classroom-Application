import React, { Component } from 'react';
import { VideoStreamApi } from '../lib/SocketApi';
import './Videos.css';


class Videos extends Component {

  constructor() {
    super();
    this.state = {
      videoSrc:"",
      audioSrc:"",
    }
  }

  componentDidMount() {
    const messenger = new VideoStreamApi()

    if( this.props.streams==="video"){
      messenger.setAudioStreamListener(function(sample) {
        this.setState({audioSrc:sample})
      },this)
      messenger.setVideoStreamListener(function(image) {
        this.setState({videoSrc:image})
      }, this)

    } else if(this.props.streams==="screen"){
      messenger.setScreenshareListener(function(image) {
        this.setState({videoSrc:image})
      }, this)
    }
  }


  render() {

    const { videoSrc, audioSrc } = this.state;
    const { streams } = this.props
    const video = streams === "video"

    return (
      <div className="right">
        <h6>{ video ? "Video Stream" : "Screenshare" }</h6>
        <img src={videoSrc} />
        {
          video && <audio autoPlay ref={this.audio} src={audioSrc} /> 
        }
      </div>
    )
    
  }
}

export default Videos
