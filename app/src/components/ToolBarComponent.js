/*
    This component contains the view for the ToolBar
*/

import React, { Component } from 'react';
import './css/ToolBarComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ToolBarComponent extends Component {
    render (){
        return (
            <div class="toolBar">
                <div class="toolBarDivider">
                    <a href="#">
                        <FontAwesomeIcon
                            icon='microchip' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon
                            icon='step-forward' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon
                            icon='play' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon
                            icon='stop' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon
                            icon='backward' />
                    </a>
                </div>
                <div class='toolBarDivider'>
                    <a href="#">
                        <FontAwesomeIcon
                            icon='calculator' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon
                            icon='clock' />
                    </a>
                </div>
                <div class="toolBarDivider">
                    <a href="#">
                        <FontAwesomeIcon
                            icon='scroll' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon
                            icon='flag' />
                    </a>
                </div>

                <input type='range' min='0' max='5'></input>

                <select name='animation'>
                    <option value='program'>Program Flow</option>
                </select>
                
                <select name='format'>
                    <option value='decimal'>Decimal</option>
                </select>
                
                <select name='view'>
                    <option value='script'>Script</option>
                </select>



            </div>
        )
    }
}

export default ToolBarComponent;