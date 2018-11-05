/*
    This container manages the logic for the LoginButton
*/ 


import React, { Component } from 'react';
import LoginButtonComponent from '../components/LoginButtonComponent.js';

class LoginButton extends Component {

    render() {
        return (
            <LoginButtonComponent
                showLoginModal={this.props.showLoginModal}
                userInfo={this.props.userInfo}
                handleLogout={this.props.handleLogout}
            >
            </LoginButtonComponent>
        )
    }
}

export default LoginButton;