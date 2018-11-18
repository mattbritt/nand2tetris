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

import AboutModal from './containers/AboutModal';

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
        showAboutModal: false,
        chips: [],
        loggedIn: false,
        chipName: ""
      };
      
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleLoadChip = this.handleLoadChip.bind(this);
      this.handleSingleStep = this.handleSingleStep.bind(this);
      this.handlePlay = this.handlePlay.bind(this);
      this.handleStop = this.handleStop.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.handleEval = this.handleEval.bind(this);
      this.handleTickTock = this.handleTickTock.bind(this);
      this.handleLoadScript = this.handleLoadScript.bind(this);
      this.handleBreakpoints = this.handleBreakpoints.bind(this);
      this.handleAnimationSpeedChange = this.handleAnimationSpeedChange.bind(this);
      this.handleAnimateTypeChange = this.handleAnimateTypeChange.bind(this);
      this.handleViewChange = this.handleViewChange.bind(this);
      this.handleFormatChange = this.handleFormatChange.bind(this);

    }

    handleViewChange(value){
      // console.log("handleViewChange")
      // console.log(value);
    }

    handleFormatChange(value){
      // console.log("handleFormatChange")
      // console.log(value)
    }

    handleAnimateTypeChange(value)
    {
      // console.log("handleAnimateTypeChange")
      // console.log(value)
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

    showAboutModal = () =>
    {
      this.setState({showAboutModal: true});
    }

    hideAboutModal = () =>
    {
      this.setState({showAboutModal: false});
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



    handleSingleStep(){
      // console.log("single step")
    }

    handlePlay(){
      // console.log("play")
    }

    handleStop(){
      // console.log("stop")
    }

    handleReset(){
      // console.log("reset")
    }

    handleEval(){
      // console.log("eval")
    }

    handleTickTock(){
      // console.log("tick/tock")
    }

    handleLoadScript(){
      // console.log("load script")
    }

    handleBreakpoints(){
      // console.log("breakpoints")
    }
  
    handleAnimationSpeedChange(value){
      // console.log("handleAnimationSpeedChange")
      // console.log(value)
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

          handleSingleStep={this.handleSingleStep}
          handlePlay={this.handlePlay}
          handleStop={this.handleStop}
          handleReset={this.handleReset}
          handleEval={this.handleEval}
          handleTickTock={this.handleTickTock}
          handleLoadScript={this.handleLoadScript}
          handleBreakpoints={this.handleBreakpoints}
          showAboutModal={this.showAboutModal}
        ></MenuBar>
        <ToolBar
          handleShowLoadChipModal={this.showLoadChipModal}
          handleSingleStep={this.handleSingleStep}
          handlePlay={this.handlePlay}
          handleStop={this.handleStop}
          handleReset={this.handleReset}
          handleEval={this.handleEval}
          handleTickTock={this.handleTickTock}
          handleLoadScript={this.handleLoadScript}
          handleBreakpoints={this.handleBreakpoints}
          handleAnimationSpeedChange={this.handleAnimationSpeedChange}
          handleAnimateTypeChange={this.handleAnimateTypeChange}
          handleFormatChange={this.handleFormatChange}
          handleViewChange={this.handleViewChange}
        ></ToolBar>
      </div>
  
        <div className='halfDiv'>

          <div id='pinsHdlDiv'>
            <NameBox className='NameBox'
                chipName={this.state.chipName}
              ></NameBox>
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

      <AboutModal
        show={this.state.showAboutModal}
        handleClose={this.hideAboutModal}
        ></AboutModal>


     </div>
    );
  }
}

export default App;
