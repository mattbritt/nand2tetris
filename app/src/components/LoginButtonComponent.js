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
            <div id='loggedInDisplay'>
                Welcome {this.props.userInfo.username} 
                <FontAwesomeIcon id='cogIcon'
                        icon='cog' />
            </div>
        );

            console.log("user info: ");
            console.log(this.props.userInfo)

        return (
            <div>
                { this.props.userInfo.username ?  loggedInDisplayJsx : loginButtonJsx }
            </div>
        )
    }
}

export default LoginButtonComponent;