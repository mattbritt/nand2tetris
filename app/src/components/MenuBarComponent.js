/*
    This component contains the display elements for the MenuBar
*/
import React, { Component } from 'react';
import './css/MenuBarComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LoginModal from "../containers/LoginModal";
import LoginButton from '../containers/LoginButton';
import LoadChipModal from '../containers/LoadChipModal';



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