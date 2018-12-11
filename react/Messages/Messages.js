import React, { Component } from 'react';
import BubbleChat from './BubbleChatMe'

const messagesStyles = {
  width:"100vw",
  flex:1,
  display:"flex",
  flexDirection:"column",
  overflow:"auto",
  marginLeft:"10px"
}

class Messages extends Component {

  constructor() {
    super();
    this.state = {
      messages:[]
    }
  }

  async componentDidMount() {

    const { api } = this.props;

    api.listen( this.handleNewMessage.bind(this) )

    this.setState({ messages: await api.get() })
  }

  handleNewMessage(newMsg) {
    const { messages } = this.state;
    const newMessages = messages.slice();
    newMessages.push(newMsg)
    this.setState({ messages:newMessages })
  }

  render(){

    return(
      <div style={messagesStyles}>
        { this.state.messages.map( (v,k) => <BubbleChat message={v.message} me={ this.props.screenName === v.name} key={k} sender={v.name} />) }
      </div>
    )

  }
}

export default Messages
