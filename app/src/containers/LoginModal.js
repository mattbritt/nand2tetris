/*
    This Container manages the logic for the LoginModal
*/

import React, { Component } from 'react';
import LoginModalComponent from '../components/LoginModalComponent-Dropdown.js'

import backendSettings from '../backendSettings.json'

class LoginModal extends Component {

    constructor(props){
        super(props);

        this.state = { userJson: [] }

    }

    
    componentDidMount() {
        // if (this.props.show) {
            var url = backendSettings.backendUrl;
            url += '/users';

            console.log(url);

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((userJson) => {
                    console.log(userJson);
                    this.setState({'userJson': userJson});
                })
        // }
    }

    render() {
        return (
            <LoginModalComponent 
                show={this.props.show}
                userJson={this.state.userJson} 
                handleClose={this.props.handleClose}
                handleLogin={this.props.handleLogin}    
            ></LoginModalComponent>
        );
    }
}

export default LoginModal;