import React, { Component } from 'react';

import UrlParser from "../lib/UrlParser";

const bubbleChatStyles = {
  borderStyle:'solid',
  maxWidth:"60vw",
  borderRadius: '10px',
  padding:".1em",
  margin: ".3em",
}

class BubbleChatMe extends Component {
  render(){
    const { message, me, sender } = this.props

    const side = me ? "flex-end" : "flex-start"

    console.log(UrlParser(message))

    return(
        <div style={{...bubbleChatStyles, alignSelf: side }} >
          <p>{message}</p>
          { me ? null : <p style={{ fontSize:".5rem" }}>From: {sender}</p> }
        </div>
    )

  }
}
export default BubbleChatMe
