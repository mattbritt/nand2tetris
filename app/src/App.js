import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MenuBar from "./containers/MenuBar";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretDown)
library.add(faUser);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:  []
     };
    }


  render() {
    return (
     <div>
       <MenuBar></MenuBar>
     </div>
    );
  }
}

export default App;
