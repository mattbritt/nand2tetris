/*
    This component manages the view for the LoginButton
*/

import React, { Component } from 'react';
import './css/LoginButtonComponent.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoginButtonComponent extends Component {

    render () {

        var loginButtonJsx =
            (<div id="loginButton">
            <a onClick={this.props.showLoginModal}>
                <FontAwesomeIcon
                        icon='user'/> Login
            </a>
          </div>) ;

        var loggedInDisplayJsx = (
            <div id='loggedInDisplay'
                className='dropdown'>
                <button className='dropbtn'>
                    Welcome {this.props.userInfo.username} 
                    <FontAwesomeIcon id='cogIcon'
                            icon='cog' />
                </button>
                <div className='dropdown-content'>
                    <a href='#'>Manage Account</a>
                    <hr></hr>
                    <a href='#'
                        onClick={this.props.handleLogout}
                    >Logout</a>
                </div>
            </div>
        );

        return (
            <div>
                { this.props.userInfo.username ?  loggedInDisplayJsx : loginButtonJsx }
            </div>
        )
    }
}

export default LoginButtonComponent;