import React, { Component } from 'react';
import { attachWebcam, attachDesktop } from '../lib/TwilioApi'
import './Videos.css';


class Videos extends Component {

  constructor() {
    super()
    this.videoElement = React.createRef()
  }

  componentDidMount() {
    const { streams, connection } = this.props

    const video = streams === "video"
    if(!video) {
      attachDesktop(connection, this.videoElement.current)
    } else {
      attachWebcam(connection, this.videoElement.current)
    }

  }

  render() {
    const { streams } = this.props
    const video = streams === "video"

    return (
      <div className="right">
        <h6>{ video ? "Video Stream" : "Screenshare" }</h6>
        <video autoPlay ref={this.videoElement} />
      </div>
    )

  }
}

export default Videos
