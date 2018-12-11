import React, { Component } from 'react';

const bubbleChatStyles = {
  borderStyle:'solid',
  maxWidth:"60vw",
  borderRadius: '10px',
  paddingRight:'2px',
  paddingLeft:'8px'
}

class BubbleChatMe extends Component {
  render(){
    const { message } = this.props

    const side = this.props.me ? "flex-end" : "flex-start"

    return(
        <div style={{...bubbleChatStyles, alignSelf: side }} >
          {message}
        </div>
    )

  }
}
export default BubbleChatMe
