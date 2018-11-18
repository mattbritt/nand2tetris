import React, { Component } from 'react';
import AboutModalComponent from '../components/AboutModalComponent.js'

class AboutModal extends Component{

    render() {
        return (
            <AboutModalComponent
                show={this.props.show}
                handleClose={this.props.handleClose}
            ></AboutModalComponent>
        )
    }
}

export default AboutModal;