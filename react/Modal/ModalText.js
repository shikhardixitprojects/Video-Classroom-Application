import React, { Component } from 'react';
import './index.css'

 class ModalText extends Component {


  constructor(props) {
    super(props);
     this.state = {
      modalVisible: true,
      textInput: "",
      senderList: []
  }
}


handleButtonClick() {
  if(this.state.textInput==="") return;
  this.props.onSetScreenName(this.state.textInput)
  this.setState({modalVisible: false});
}


  renderTextInput(e) {
    this.setState({ textInput:e.target.value });
  }

  render() {

      const { modalVisible } = this.state;
      const modalDisplay = modalVisible ? "flex" : "none"

      return (
        <div className = "modal-container" style={{ display: modalDisplay }}>
          <div className = "modal-input">
            <h3>Please input your real name</h3>
            <a href="https://docs.google.com/document/d/1T75a2IVqzPl2ftkFDdvI48A3REZAAfpGDuePmHfDbTo/edit?usp=sharing" target="blank">Our policy</a>
            <p> Enter your name: </p>
            <input onChange={this.renderTextInput.bind(this)} value={ this.state.textInput } />
            <button onClick={this.handleButtonClick.bind(this)}>Enter </button>
          </div>
        </div>
      )
    }
  }


  export default ModalText
