/*
    This Container manages the logic for the LoginModal
*/

import React, { Component } from 'react';
import LoginModalComponent from '../components/LoginModalComponent.js'

class LoginModal extends Component {

    render() {
        return (
            <LoginModalComponent show={this.props.show} handleClose={this.props.handleClose}></LoginModalComponent>
        );
    }
}

export default LoginModal;