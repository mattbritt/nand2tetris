import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import backendSettings from './backendSettings.json';

import MenuBar from "./containers/MenuBar";
import ToolBar from "./containers/ToolBar";

import NameBox from "./containers/NameBox";

import StatusBar from "./containers/StatusBar";

import LoadChipModal from './containers/LoadChipModal';

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
        user:  {},
        showLoadChipModal: false,
        chips: [],
        loggedIn: false
      };
      
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleLoadChip = this.handleLoadChip.bind(this);
    
    }

    handleLoadChip(chipId)
    {
      console.log("handleLoadChip")
      console.log(chipId)
    }

    showLoadChipModal = () =>
    {
      if(this.state.loggedIn)
        this.setState({showLoadChipModal: true});
    }

    hideLoadChipModal = () =>
    {
        this.setState({showLoadChipModal: false});
    }

    handleLogout()
    {
      this.setState({user: {}, chips: [], loggedIn: false})
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
              this.setState({user: userJson[0], loggedIn: true})
              this.loadChips(userId);
            })
      }
    }
  
  loadChips(userId)
  {

    if(!userId)
      return;


    var url = backendSettings.backendUrl;
    url += '/users/' + userId + '/chips';


//     fetch(url)
//       .then((response) => {
//         console.log("loadchips B")

//         return response.json();
//       })
//       .then((chipsJson) => {
//         console.log("chips Json");
//         console.log(chipsJson);
// ///////// Dummy data to get view working //////////
//         //this.setState({chips: chipsJson});
//         var dummyChips = [
//           { chipName: "And", filename: "and.hdl"},
//           { chipName: "Or", filename: "or.hdl"},
//           { chipName: "ALU", filename: "alu.hdl"}
//         ];
//         this.setState({chips: dummyChips})
//       })
        var dummyChips = [
          { id: 1, chipName: "And", filename: "and.hdl"},
          { id: 2, chipName: "Or", filename: "or.hdl"},
          { id: 3, chipName: "ALU", filename: "alu.hdl"}
        ];
          this.setState({chips: dummyChips})

}


  render() {
    return (
     <div id='mainWindow'>
       <div id='headerDiv'>
        <MenuBar 
          handleLogin={this.handleLogin}
          userInfo={this.state.user}
          handleLogout={this.handleLogout}
          handleShowLoadChipModal={this.showLoadChipModal}
        ></MenuBar>
        <ToolBar
          handleShowLoadChipModal={this.showLoadChipModal}
        ></ToolBar>
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

      <LoadChipModal 
        show={this.state.showLoadChipModal}
        handleClose={this.hideLoadChipModal}
        handleLoad={this.handleLoadChip}
        chips={this.state.chips}
        loggedIn={this.state.loggedIn}
      ></LoadChipModal>

     </div>
    );
  }
}

export default App;
