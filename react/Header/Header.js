import React, { Component } from 'react';
import './index.css'

class Header extends Component {

  render() {

    return(
        <header className = "title">
          <h3>{this.props.screenName}</h3>
        </header>
    )
  }
}

export default Header
