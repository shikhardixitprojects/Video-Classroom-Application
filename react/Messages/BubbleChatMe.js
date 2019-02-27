import React, { Component } from 'react';
import './messages.css';

import UrlParser from "../lib/UrlParser";
import UrlSeparator from '../lib/UrlSeparator';

const bubbleChatStyles = {
  maxWidth:"60vw",
  borderRadius: '10px',
  padding:".1em",
  margin: ".3em",
  marginLeft: "1.5em",
  paddingLeft: ".5em",
  paddingRight: ".5em",
  fontSize: "1.75em"
}
const bubbleChatNoBorderStlyes = {
  maxWidth:"60vw",
  padding:".1em",
  margin: ".3em",
}

class BubbleChatMe extends Component {
  render(){

    const { message, me, sender, users } = this.props

    const side = me ? "flex-end" : "flex-start"

    const messageColor = me ? "#3385ff" : "#e6e6e6"
    const textColor = me ? "white" : "black"

    const urls = UrlParser(message);

    // parse message at each url and surround url with a tag
    const urlSep = UrlSeparator(urls, message)

    // then map inside BubbleChatMe.js
    const messageCmpts = urlSep.map( function(x) {
      if(!x.url) {
        return <span>{x.messagePart}</span>
      } else {
        const absUrl = x.messagePart.match(/^https?:\/\//)
        ? x.messagePart
        : "http://" + x.messagePart

        return <a href={absUrl} style={{color:textColor}}>{x.messagePart}</a>
      }
    })


    let { color } = users.find(x => x.name === sender)


    return(
      <div style={{bubbleChatNoBorderStlyes,  alignSelf: side}}>
        { me ? null : <div className="circle" style={{ background: color }}>{sender.charAt(0).toUpperCase()}</div>}
        { me ? null : <p style={{ fontSize:"1rem", marginLeft: "3em" }}>{sender}</p> }
        <div style={{...bubbleChatStyles, alignSelf: side, background: messageColor, color: textColor}} >
          <p>{messageCmpts}</p>
        </div>
      </div>
    )

  }
}
export default BubbleChatMe

//<div style={{float: "none", alignSelf: side}}>
          //{ me ? null : <div className="circle" style={{ background: color }}>{sender.charAt(0).toUpperCase()}</div>}
          //{ me ? null : <p style={{ fontSize:"1rem", marginLeft: "3em" }}>{sender}</p> }
        //</div>