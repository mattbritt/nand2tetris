/*
    This component contains the display elements for the MenuBar
*/
import React, { Component } from 'react';
import './css/MenuBarComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LoginModal from "../containers/LoginModal";
import LoginButton from '../containers/LoginButton';

class MenuBarComponent extends Component {

    state = {
                showLoginModal: false
            };

    showLoginModal = () => 
    {
        this.setState({showLoginModal: true});
    }

    hideLoginModal = () =>
    {
        this.setState({showLoginModal: false});
    }




    render(){
        return (
            <div className="navbar">
                <div className='dropdown'>
                    <button className='dropbtn'>File <FontAwesomeIcon 
                            icon="caret-down"/>
                    </button>                    
                    <div className='dropdown-content'>
                        <a onClick={this.props.handleShowLoadChipModal}>Load Chip</a>
                        <a onClick={this.props.handleLoadScript}>Load script</a>
                    </div> 
                </div> {/* dropdown */}
                <div className='dropdown'>
                    <button className='dropbtn'>Run <FontAwesomeIcon 
                                icon='caret-down'/>
                    </button>
                    <div className='dropdown-content'>
                        <a onClick={this.props.handleSingleStep}>Single Step</a>
                        <a onClick={this.props.handlePlay}>Run</a>
                        <a onClick={this.props.handleStop}>Stop</a>
                        <a onClick={this.props.handleReset}>Reset</a>
                        <hr></hr>
                        <a onClick={this.props.handleEval}>Eval</a>
                        <a onClick={this.props.handleTickTock}>Tick Tock</a>
                        <hr></hr>
                        <a onClick={this.props.handleBreakpoints}>Breakpoints</a>
                    </div>

                </div> {/* dropdown */}

                <div className='dropdown'>
                    <button className='dropbtn'>Help <FontAwesomeIcon
                                icon='caret-down'/>
                    </button>
                    <div className='dropdown-content'>
                        <a  target="_blank"
                            href="https://docs.wixstatic.com/ugd/44046b_bfd91435260748439493a60a8044ade6.pdf">Usage</a>
                        <a>About</a>
                    </div>
                </div>

                <LoginButton
                    showLoginModal={this.showLoginModal}
                    userInfo={this.props.userInfo}
                    handleLogout={this.props.handleLogout}
                >
                </LoginButton>

                <LoginModal 
                    show={this.state.showLoginModal} 
                    handleClose={this.hideLoginModal}
                    handleLogin={this.props.handleLogin}    
                ></LoginModal>


            </div> // navbar
        );
    }
}

export default MenuBarComponent;