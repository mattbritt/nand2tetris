import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import backendSettings from './backendSettings.json';

import MenuBar from "./containers/MenuBar";
import ToolBar from "./containers/ToolBar";

import NameBox from "./containers/NameBox";

import StatusBar from "./containers/StatusBar";

import CellViewer from "./containers/CellViewer";
import CellViewerWithTitle from "./containers/CellViewerWithTitle";

import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUser, faMicrochip, faPlay, faStop,
     faBackward, faStepForward, faCalculator, faClock, faScroll, faFlag, faCog
       } from '@fortawesome/free-solid-svg-icons'

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
library.add(faCog);

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user:  {}
      };
      
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    
    }

    handleLogout()
    {
      this.setState({user: {}})
    }

    handleLogin(userId)
    {
      // if there's a userId then get the user data from server
      if(userId){
        var url = backendSettings.backendUrl;
        url += '/users/' + userId;

        fetch(url)
            .then((response)=>{
              return response.json();
            })
            .then((userJson)=>{
              this.setState({user: userJson[0]})
            })
      }
    }


  render() {
    return (
     <div id='mainWindow'>
       <div id='headerDiv'>
        <MenuBar 
          handleLogin={this.handleLogin}
          userInfo={this.state.user}
          handleLogout={this.handleLogout}
        ></MenuBar>
        <ToolBar></ToolBar>
      </div>
  
        <div className='halfDiv'>

          <div id='pinsHdlDiv'>
            <NameBox className='NameBox'></NameBox>
            <CellViewerWithTitle title="Input Pins"></CellViewerWithTitle>

            <CellViewerWithTitle title="Output Pins"></CellViewerWithTitle>

            <CellViewerWithTitle title="HDL"></CellViewerWithTitle>

            <CellViewerWithTitle title="Internal Pins"></CellViewerWithTitle>

          </div>
        </div>
        <div className='halfDiv'>
          <CellViewer></CellViewer>
        </div>


      <div id='footerDiv'>
        <StatusBar></StatusBar>
      </div>

     </div>
    );
  }
}

export default App;
