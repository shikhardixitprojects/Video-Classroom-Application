import React, { Component } from 'react';
import BubbleChat from './BubbleChatMe'

const messagesStyles = {
  width:"75vw",
  flex:1,
  display:"flex",
  flexDirection:"column",
  overflow:"auto",
  marginLeft:"10px"
}

const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);


class Messages extends Component {

  constructor() {
    super();
    this.state = {
      messages:[],
      users:[],
    }
  }

  async componentDidMount() {

    const { api } = this.props;

    api.listen( this.handleNewMessage.bind(this) )

    const messages = await api.get()
    const users = messages.map(x => ({ name:x.name, color: randomColor()}))
    this.setState({ messages, users })
  }

  handleNewMessage(newMsg) {

    const { messages, users } = this.state;
    const newMessages = messages.slice();
    const newUsers = users.slice();
    newMessages.push(newMsg)

    if(!users.find( u => u.name === newMsg.name )) {
      newUsers.push({name: newMsg.name, color: randomColor()});
    }

    this.setState({ messages:newMessages, users: newUsers })
  }

  render(){

    const circleColor = randomColor();
    const {users} = this.state;

    return(
      <div style={messagesStyles}>
        { this.state.messages.map( (v,k) => <BubbleChat message={v.message} me={ this.props.screenName === v.name} key={k} sender={v.name} users = {users}/>) }
      </div>
    )

  }
}

export default Messages
