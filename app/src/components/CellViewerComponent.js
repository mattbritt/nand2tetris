/*
    This container handles the view for the CellViewer component
*/

import React, { Component } from 'react';
import './css/CellViewerComponent.css';

class CellViewerComponent extends Component {

    render() {

        var datum;

        if(this.props.data)
        {
            datum = this.props.data.dataArray.map((rowArray, index) =>
            {
                var rowId;
                var dataRow =
                    Object.keys(rowArray).map((key, index2) =>{
                        var thisClass = "selectedRow";
                        if(key == "id")
                        {
                            rowId = rowArray[key];
                            return;
                        }
                        return <td className={thisClass} 
                                    key={index2}>{rowArray[key]}</td>});

                
                return (<tr onClick={this.props.handleRowClick.bind(this, rowId)} key={rowId}>{dataRow}</tr>)
            }
            )
        }
        else
        {
            datum = ( <tr>
                <td>x[1]</td>
                <td>1</td>
            </tr>)
        }

        return (
            <div className='CellViewerWrapper'>
                <div className='CellViewer'>
                    <table>
                    <tbody>

                        { this.props.data ? 
                        ( <tr>
                                {this.props.data.columnTitles.map((title, index) => {                                   <th key>{title}</th>
                                   return  (<th key={index}>{title}</th>)})}
                        </tr>)
                        :
                         (   <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>)
                        }
                        
                        
                        {datum}

            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CellViewerComponent;