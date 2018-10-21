/*
    This component contains the display elements for the MenuBar
*/
import React, { Component } from 'react';
import './css/MenuBarComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class MenuBarComponent extends Component {
    render(){
        return (
            <div className="navbar">
                <div className='dropdown'>
                    <button className='dropbtn'>File <FontAwesomeIcon 
                            icon="caret-down"/>
                    </button>                    
                    <div className='dropdown-content'>
                        <a href="#">Load Chip</a>
                        <a href="#">Load script</a>
                        <hr></hr>
                        <a href="#">Exit</a>
                    </div> 
                </div> {/* dropdown */}
                <div className='dropdown'>
                    <button className='dropbtn'>Run <FontAwesomeIcon 
                                icon='caret-down'/>
                    </button>
                    <div className='dropdown-content'>
                        <a href="#">Single Step</a>
                        <a href="#">Run</a>
                        <a href="#">Stop</a>
                        <a href="#">Reset</a>
                        <hr></hr>
                        <a href="#">Eval</a>
                        <a href="#">Tick Tock</a>
                        <hr></hr>
                        <a href="#">Breakpoints</a>
                    </div>

                </div> {/* dropdown */}

                <div className='dropdown'>
                    <button className='dropbtn'>Help <FontAwesomeIcon
                                icon='caret-down'/>
                    </button>
                    <div className='dropdown-content'>
                        <a href="#">Usage</a>
                        <a href="#">About</a>
                    </div>
                </div>

                <div id="loginButton">
                    <a href="#">
                        <FontAwesomeIcon
                                icon='user'/> Login
                    </a>
                </div>
            </div> // navbar
        );
    }
}

export default MenuBarComponent;