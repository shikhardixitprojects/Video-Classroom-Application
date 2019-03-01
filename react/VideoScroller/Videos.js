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

    if( this.props.VIDEO_EVENT){
      messenger.setVideoStreamListener(function(image) {
        this.setState({videoSrc:image})
      }, this)
    }
    else if(this.props.SCREEN_EVENT){
      messenger.setScreenshareListener(function(image) {
        this.setState({videoSrc:image})
      }, this)
    }
    }


  render(){
      return(
          <div className="right">
                  <h3>Video Stream</h3>
                  <img src={this.state.videoSrc} />
          </div>
      )
  }
}

export default Videos
