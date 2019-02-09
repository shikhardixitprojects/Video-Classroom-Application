import React, { Component } from 'react';
import TextInput from './Chatbox/TextInput';
import Header from './Header/Header';
import Messages from './Messages/Messages'
import ModalText from './Modal/ModalText';
import MessageApi from './lib/MessageApi';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     screenName: "",
    }
    
    this.api = new MessageApi()
  }

  setScreenName(screenName){
    this.setState({ screenName }); 
  }

  render() {

    return(
      <div className="App">
        <ModalText onSetScreenName = {this.setScreenName.bind(this)} />
        <Header screenName={this.state.screenName} />
        <Messages api={this.api} screenName = {this.state.screenName} />
        <TextInput api={this.api} screenName={this.state.screenName} />
      </div>
    )

  }
}

export default App;
