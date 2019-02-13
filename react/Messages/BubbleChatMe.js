import React, { Component } from 'react';

import UrlParser from "../lib/UrlParser";
import UrlSeparator from '../lib/UrlSeparator';

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

    const urls = UrlParser(message);
    console.log(urls)

    // parse message at each url and surround url with a tag
    const urlSep = UrlSeparator(urls, message)

    // then map inside BubbleChatMe.js
    urlSep.map( function(x) {
      if(!x.url) {
        return <span>{x}</span>
      } else {
        return <a href="x">{x}</a>
      }
    })

    return(
        <div style={{...bubbleChatStyles, alignSelf: side }} >
          <p>{message}</p>
          { me ? null : <p style={{ fontSize:".5rem" }}>From: {sender}</p> }
        </div>
    )

  }
}
export default BubbleChatMe
