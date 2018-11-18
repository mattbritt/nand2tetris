/*
    This component contains the view for the ToolBar
*/

import React, { Component } from 'react';
import './css/ToolBarComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Slider from  '../containers/Slider.js'

class ToolBarComponent extends Component {
    render (){
        return (
            <div className="toolBar">
                <div className="toolBarDivider">
                    <a  className='tooltip'
                        onClick={this.props.handleShowLoadChipModal}                    
                    >
                        <FontAwesomeIcon
                            icon='microchip' />
                            <span className='tooltiptext'>Load Chip</span>
                    </a>
                    <a onClick={this.props.handleSingleStep} className='tooltip'>
                        <FontAwesomeIcon
                            icon='step-forward' />
                            <span className='tooltiptext'>Single Step</span>
                    </a>
                    <a onClick={this.props.handlePlay} className='tooltip'>
                        <FontAwesomeIcon
                            icon='play' />
                            <span className='tooltiptext'>Play</span>
                    </a>
                    <a onClick={this.props.handleStop} className='tooltip'>
                        <FontAwesomeIcon
                            icon='stop' />
                            <span className='tooltiptext'>Stop</span>
                    </a>
                    <a onClick={this.props.handleReset} className='tooltip'>
                        <FontAwesomeIcon
                            icon='backward' />
                            <span className='tooltiptext'>Reset</span>
                    </a>
                </div>
                <div className='toolBarDivider'>
                    <a onClick={this.props.handleEval} className='tooltip'>
                        <FontAwesomeIcon
                            icon='calculator' />
                            <span className='tooltiptext'>Eval</span>
                    </a>
                    <a onClick={this.props.handleTickTock} className='tooltip'>
                        <FontAwesomeIcon
                            icon='clock' />
                            <span className='tooltiptext'>Tick / Tock</span>
                    </a>
                </div>
                <div className="toolBarDivider">
                    <a onClick={this.props.handleLoadScript} className='tooltip'>
                        <FontAwesomeIcon
                            icon='scroll' />
                            <span className='tooltiptext'>Load Test Script</span>
                    </a>
                    <a onClick={this.props.handleBreakpoints} className='tooltip'>
                        <FontAwesomeIcon
                            icon='flag' />
                            <span className='tooltiptext'>Breakpoints</span>
                    </a>
                </div>


                    <div className='tooltip'>
                        <Slider id='animationSpeedSlider'
                            handleValueChange={this.props.handleAnimationSpeedChange}
                        ></Slider>
                        <span className='tooltiptext'>Animation Speed</span>
                    </div>
                
                <div style={{float: 'right'}}>
                    <div className='tooltip'>
                        <select name='animation' className='tooltip'>
                            <option value='program'>Program Flow</option>
                            <option value='programData'>Program and Data Flow</option>
                            <option value='noAnimation'>No Animation</option>
                        </select>
                        <span className='tooltiptext'>Animate</span> 
                    </div>
                    
                    <div className='tooltip'>    
                        <select name='format'>
                            <option value='decimal'>Decimal</option>
                            <option value='hexa'>Hexadecimal</option>
                            <option value='binary'>Binary</option>
                        </select>
                        <span className='tooltiptext'>Format</span> 
                    </div>
                    
                    <div className='tooltip'>
                        <select name='view'>
                            <option value='script'>Script</option>
                            <option value='output'>Output</option>
                            <option value='compare'>Compare</option>
                            <option value='screen'>Screen</option>
                        </select>
                        <span className='tooltiptext'>View</span> 
                    </div>
                </div>


            </div>
        )
    }
}

export default ToolBarComponent;