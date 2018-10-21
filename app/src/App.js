import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import MenuBar from "./containers/MenuBar";
import ToolBar from "./containers/ToolBar";

import NameBox from "./containers/NameBox";

import StatusBar from "./containers/StatusBar";


import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUser, faMicrochip, faPlay, faStop,
     faBackward, faStepForward, faCalculator, faClock, faScroll, faFlag } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretDown)
library.add(faUser);
library.add(faMicrochip);
library.add(faPlay);
library.add(faStop);
library.add(faBackward);
library.add(faStepForward);
library.add(faCalculator);
library.add(faClock);
library.add(faScroll);
library.add(faFlag);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:  []
     };
    }


  render() {
    return (
     <div id='mainWindow'>
       <div id='headerDiv'>
        <MenuBar></MenuBar>
        <ToolBar></ToolBar>
      </div>
  
        <div className='halfDiv'>
          <NameBox></NameBox>
        </div>
        <div className='halfDiv'>
          
        </div>


      <div id='footerDiv'>
        <StatusBar></StatusBar>
      </div>

     </div>
    );
  }
}

export default App;
