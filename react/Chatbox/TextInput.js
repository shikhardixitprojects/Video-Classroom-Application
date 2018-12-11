import React, { Component } from 'react';
import "./index.css"


class TextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messageInput: ""
    }

  }

  handleChangeMessageText(e) {
    this.setState({ messageInput:e.target.value });
  }

  handleSendMessage() {

    const { messageInput: message } = this.state;
    const { screenName: name, api } = this.props;

    api.send(name, message).then( () => this.setState({messageInput:""}))

  }

  render() {

    return (
      <div className = "message-input" >
        <input 
        onChange={this.handleChangeMessageText.bind(this)} 
        value={ this.state.messageInput } 
        onKeyPress={e => e.key==="Enter" && this.handleSendMessage() } />
        <button onClick= {this.handleSendMessage.bind(this)} />
      </div>

    )

  }

}

export default TextInput
