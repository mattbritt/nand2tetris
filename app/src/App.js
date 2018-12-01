/*
    Name: App.js
    Description:  This module houses the main app logic for the 
                  online Nand2Tetris Hardware Simulator
    Author: Matt Britt
    Project:  CS 467 Capstone Project: Nand2Tetris Hardware Sim
    Team:  Team Grus

*/


import React, { Component } from 'react';

import './App.css';

import backendSettings from './backendSettings.json';
//import strip from 'strip-comments';

import MenuBar from "./containers/MenuBar";
import ToolBar from "./containers/ToolBar";

import NameBox from "./containers/NameBox";

import StatusBar from "./containers/StatusBar";

import LoadScriptModal from './containers/LoadScriptModal';
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
        showLoadScriptModal: false,
        chips: [],
        scripts: [],
        loggedIn: false,
        chipName: "",
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


  parseChip = (chipStr) => {

    var hdlObj = {
      columnTitles: [],
      dataArray: []
    }

    var chipName = "";

    var inputObj = {
      columnTitles: ["Name", "Value"],
      dataArray: []
    }
    var outputObj = {
      columnTitles: ["Name", "Value"],
      dataArray: []
    }
    var internalObj = {
      columnTitles: ["Name", "Value"],
      dataArray: []
    }

    var currentPins = [
      'Nand',
      'Or',
      'And'
    ];

    //var noComments = file.target.result.replace(/(\/\*[^*]*\*\/)|(\/\/[^*]*)/g, '');
    var noComments = chipStr.replace(/\/{2,}.*/g, '');
    noComments = noComments.replace(/(\/\*+([^/])*\*+\/)/, '');

    // parse inputs
    var inputsRegex = new RegExp(/(?<=IN)[\s\S]*?(?=;)/);
    var inputs = inputsRegex.exec(noComments);

    if (inputs) {
      inputs = inputs[0].trim().split(/,?\s+/);
      if (inputs) {
        inputs.forEach((inputPin, index) => {
          inputObj.dataArray.push({ id: index, pin: inputPin, value: 0 })
          currentPins.push(inputPin);
        });
      }
    }
    else {
      console.log("inputs was null from regex")
    }

    var outputsRegex = new RegExp(/(?<=OUT)[\s\S]*?(?=;)/);
    var outputs = outputsRegex.exec(noComments);

    if (outputs) {
      outputs = outputs[0].trim().split(/,?\s+/);
      if (outputs) {
        outputs.forEach((outputPin, index) => {
          outputObj.dataArray.push({ id: index, pin: outputPin, value: 0 })
          currentPins.push(outputPin);
        });
      }
    }

    var internalsRegex = new RegExp(/(?<==)[a-zA-Z0-9\[\]]+/g);
    var internals = noComments.match(internalsRegex)//internalsRegex.exec(noComments);


    // parse file line by line
    //var fileLines = file.target.result.split(/\r\n|\n/)
    var fileLines = chipStr.split(/\r\n|\n/);
    fileLines.forEach((line, index) => {
      hdlObj.dataArray.push({ id: index, thisLine: line });

      // look for chipName
      if (chipName === "") {
        var wordArray = line.trim().split(/,?\s+/);
        // console.log(wordArray)
        if (wordArray[0] === 'CHIP')
          chipName = wordArray[1];
      }
    })

    this.setState({
      chipStr: chipStr,
      hdlObj: hdlObj,
      inputObj: inputObj,
      outputObj: outputObj,
      internalObj: internalObj,
      chipName: chipName,
      showLoadChipModal: false
    })

    this.checkForBothChipAndScript();
  } // end parseChip


    handleChipFileLoad = (newFile) => {
      var reader = new FileReader();
      reader.onload = (file) => {

        this.parseChip(file.target.result)

        // upload chip file
        var chipObj = {};
        chipObj.uid = this.state.userId;
        chipObj.filename = newFile.name;
        chipObj.text = file.target.result;

        // var chipUploadUrl = backendSettings.url;
        // url += '/chips';
var chipUploadUrl = 'https://postb.in/6lAKysLW';  

        fetch(chipUploadUrl,
            {
              method: 'post',
              mode: 'no-cors',
              body: JSON.stringify(chipObj)
            }
          );


      } // end reader.onload

      
      // actually read the file
      reader.readAsText(newFile)

    }

  handleScriptFileLoad = (newFile) => {
    var reader = new FileReader();
    reader.onload = (file) => {

      this.parseScript(file.target.result);

      // upload script file
      var scriptObj = {};
      scriptObj.uid = this.state.userId;
      scriptObj.filename = newFile.name;
      scriptObj.text = file.target.result;

      // var scriptUploadUrl = backendSettings.url;
      // url += '/scripts';
var scriptUploadUrl = 'https://postb.in/6lAKysLW';

      fetch(scriptUploadUrl, 
          {
            method: 'post',
            mode: 'no-cors',
            body: JSON.stringify(scriptObj)
          });

    }

    reader.readAsText(newFile);
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

      if(!chipId || !this.state.chipUrls)
        return;

      var hdlUrl;
    
      this.state.chipUrls.forEach((chip)=>{
        if(chipId === chip.id)
        {
          hdlUrl = chip.url;
        }
      });
  
  
      fetch(hdlUrl)
          .then(response => response.text())
          .then((data) =>
          {
            this.parseChip(data);
          })
    } // end handleLoadChip

    showLoadScriptModal = () =>
    {
      if(this.state.loggedIn)
        this.setState({showLoadScriptModal: true});
    }


    showLoadChipModal = () =>
    {
      if(this.state.loggedIn)
        this.setState({showLoadChipModal: true});
    }

    hideLoadScriptModal = () =>
    {
      this.setState({showLoadScriptModal: false});
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
              this.setState({user: userJson[0], loggedIn: true, userId: userId })
              this.loadChips(userId);
              this.loadScripts(userId);
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


    parseScript = (scriptStr) => {
      var scriptObj = {
        columnTitles: [],
        dataArray: []
      }

      var fileLines = scriptStr.split(/\r\n|\n/);
      fileLines.forEach((line, index) => {
        scriptObj.dataArray.push({ id: index, thisLine: line });

      });


      this.setState({ scriptStr: scriptStr,
                        scriptObj: scriptObj,
                       showLoadScriptModal: false});

       this.checkForBothChipAndScript();
    } // end parseScript
    

    checkForBothChipAndScript = () =>
    {

      console.log("check both")
      console.log(this.state)
      if(!this.state.chipStr || !this.state.scriptStr)
        return;

      console.log("passed null check")

      // we have both hdl and tst, send to Pat's API
      var checkObj = {};
      checkObj.hdl = this.state.chipStr;
      checkObj.tst = this.state.scriptStr;

      console.log(JSON.stringify(checkObj))

      var url = 'https://postb.in/6lAKysLW';

      fetch(url,
        {
          method: 'post',
          mode: 'no-cors',
          body: JSON.stringify(checkObj)
        }).then((response) => response.JSON())
        .then((checkData) => {
          console.log('check data')
          console.log(checkData)
        }
        ).catch(err => console.log(err));


    }


    handleLoadScript(scriptId)
    {
      if(!scriptId || !this.state.scriptUrls)
        return;
      
        var scriptUrl;

        this.state.scriptUrls.forEach((script)=>{
          if(scriptId === script.id)
          {
            scriptUrl = script.url;
          }
        });

        fetch(scriptUrl)
          .then(response => response.text())
          .then((data) =>
          {
            this.parseScript(data);
          });
      
    } // end handleLoadScript

    handleBreakpoints(){
      // console.log("breakpoints")
    }
  
    handleAnimationSpeedChange(value){
      // console.log("handleAnimationSpeedChange")
      // console.log(value)
    }

    loadScripts = (userId) => {

      if(!userId)
      return;


      var url = backendSettings.backendUrl;
      url += '/scripts';

      fetch(url)
        .then((response) => response.json())
        .then((scriptsData)=>{

            var newScripts = [];
            var scriptUrls = [];

            var fileNameRegex = new RegExp(/[^\/]+$/);

            if(scriptsData)
            {
              scriptsData.forEach((script) =>
              {
                var scriptObj = {};
                scriptObj.id = script.id;
                scriptObj.scriptName = script.name;
                scriptObj.filename = fileNameRegex.exec(script.filepath);
                newScripts.push(scriptObj);

                var scriptUrlObj = {};
                scriptUrlObj.id = script.id;
                scriptUrlObj.url = script.filepath;

                scriptUrls.push(scriptUrlObj);
              }) 
            }
            this.setState({ scripts: newScripts,
                              scriptUrls: scriptUrls });
        })



    } // end loadScripts

  loadChips(userId)
  {

    if(!userId)
      return;


    var url = backendSettings.backendUrl;
    url += '/chips';


    fetch(url)
      .then((response) => {


        return response.json();
      })
      .then((chipsJson) => {


        var newChips = [];
        var chipUrls = [];
        var fileNameRegex = new RegExp(/[^\/]+$/);

        if(chipsJson)
        {
          chipsJson.forEach((chip, index)=>
          {
            var chipObj = {};
            chipObj.id = chip.id;
            chipObj.chipName = chip.name;
            chipObj.filename = fileNameRegex.exec(chip.hdl_filepath);
            newChips.push(chipObj)

            var chipUrlObj = {};
            chipUrlObj.id = chip.id;
            chipUrlObj.url = chip.hdl_filepath;
            chipUrls.push(chipUrlObj);

          })
        }

        this.setState({chips: newChips,
                        chipUrls: chipUrls });
      })

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
          handleLoadScript={this.showLoadScriptModal}
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
          handleLoadScript={this.showLoadScriptModal}
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
          <CellViewer
            data={this.state.scriptObj}         
          ></CellViewer>
        </div>


      <div id='footerDiv'>
        <StatusBar></StatusBar>
      </div>

      <LoadScriptModal
        show={this.state.showLoadScriptModal}
        handleClose={this.hideLoadScriptModal}
        handleLoad={this.handleLoadScript}
        scripts={this.state.scripts}
        loggedIn={this.state.loggedIn}
        handleScriptFileLoad={this.handleScriptFileLoad}
      ></LoadScriptModal>

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
