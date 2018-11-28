import React, { Component } from 'react';

import './App.css';

import backendSettings from './backendSettings.json';
//import strip from 'strip-comments';

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
        chipName: "",
        hdlObj: { columnTitles: [], rowArray: []}
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

    handleChipFileLoad = (newFile) => {
      var reader = new FileReader();
      reader.onload = (file) => {

        var hdlObj = { columnTitles: [],
                        dataArray: [] }

        var chipName = "";

        var inputObj = { 
                        columnTitles: [ "Name", "Value"],
                        dataArray: []  
                      }
        var outputObj = { 
          columnTitles: [ "Name", "Value"],
          dataArray: []  
        }
        var internalObj = { 
          columnTitles: [ "Name", "Value"],
          dataArray: []  
        }                      

        var currentPins = [];

        //var noComments = file.target.result.replace(/(\/\*[^*]*\*\/)|(\/\/[^*]*)/g, '');
        var noComments = file.target.result.replace(/\/{2,}.*/g, '');
        noComments = noComments.replace(/(\/\*+([^/])*\*+\/)/, '');

        // parse inputs
        var inputsRegex = new RegExp(/(?<=IN)[\s\S]*?(?=;)/);
        var inputs = inputsRegex.exec(noComments);
        
        if(inputs)
        {
          inputs = inputs[0].trim().split(/,?\s+/ );
          if(inputs)
          {
            inputs.forEach((inputPin, index)=> {
              inputObj.dataArray.push({id: index, pin: inputPin, value: 0})
              currentPins.push(inputPin);
            });
          }
        }
        else{
          console.log("inputs was null from regex")
        }

          var outputsRegex = new RegExp(/(?<=OUT)[\s\S]*?(?=;)/);
          var outputs = outputsRegex.exec(noComments);

          if(outputs)
          {
            outputs = outputs[0].trim().split(/,?\s+/);
            if(outputs)
            {
              outputs.forEach((outputPin, index)=>{
                outputObj.dataArray.push({id:index, pin: outputPin, value:0})
                currentPins.push(outputPin);
              });
            }
          }

        // internal pins
        var internalsRegex = new RegExp(/\([^)]*\)/);
        var internals = internalsRegex.exec(noComments);
        //
        if(internals)
        {
            internals.forEach((val)=>{
              var valArr = val.split(/\W/);
            
              valArr.forEach((element, index)=>{
                if(
                  currentPins.includes(element) || element === "")
                {

                }
                else
                {
                  internalObj.dataArray.push({id: index, pin: element, value:0});
                }
              })
            })
            
        }
        // parse file line by line
        //var fileLines = file.target.result.split(/\r\n|\n/)
        var fileLines = noComments.split(/\r\n|\n/);
        fileLines.forEach((line, index)=>
        {
          hdlObj.dataArray.push({id: index, thisLine: line});
          
          // look for chipName
          if(chipName === "")
          {  
            var wordArray = line.trim().split(/,?\s+/ ) ;
            // console.log(wordArray)
            if(wordArray[0] === 'CHIP')
              chipName = wordArray[1];
          }
        })

        this.setState({
                        hdlObj: hdlObj,
                        inputObj: inputObj,
                        outputObj: outputObj,
                        internalObj: internalObj,
                        chipName: chipName,
                        showLoadChipModal: false
                      })


      } // end reader.onload



      reader.readAsText(newFile)

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
            <CellViewerWithTitle title="Input Pins"
              data={this.state.inputObj}
            ></CellViewerWithTitle>

            <CellViewerWithTitle title="Output Pins"
              data={this.state.outputObj}
            ></CellViewerWithTitle>

            <CellViewerWithTitle title="HDL"
              data={this.state.hdlObj}
            ></CellViewerWithTitle>

            <CellViewerWithTitle title="Internal Pins"
              data={this.state.internalObj}
            ></CellViewerWithTitle>

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
        handleChipFileLoad={this.handleChipFileLoad}
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
