/*
    This is the view of the StatusBar
*/

import React, { Component } from 'react';
import './css/StatusBarComponent.css';

class StatusBarComponent extends Component {
    render() {
        return (
            <div className='StatusBar'>
                <input type='text' disabled placeholder='Status text'></input>
            </div>
        )
    }
}

export default StatusBarComponent;