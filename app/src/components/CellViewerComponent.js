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
                var thisClass = "";
                var rowId;
                var dataRow =
                    Object.keys(rowArray).map((key, index2) =>{
                        
                        if(key === "id")
                        {
                            rowId = rowArray[key];
                            if(rowId === this.props.selectedRowId)
                                thisClass = "selectedRow";
                            return null;
                        }
                        return <td className={thisClass} 
                                    key={index2}>{rowArray[key]}</td>});

                
                return (<tr 
                                    onClick={ this.props.handleRowClick != null
                                        ? this.props.handleRowClick.bind(this, rowId)
                                        : ()=>{ }}
                            key={rowId}
                            className={thisClass}>{dataRow}</tr>)
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

        var titles =  (<tr>
                        <th>Name</th>
                        <th>Value</th>
                       </tr>);
        if(this.props.data)
        {
            titles = (<tr>
                {this.props.data.columnTitles.map((title, index) => 
                    {
                        return (<th key={index}>{title}</th>)
                    })}
            </tr>);
        }


        return (
            <div className='CellViewerWrapper'>
                <div className='CellViewer'>
                    <table>
                    <tbody>
                        {titles}
                        
                        {datum}

            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CellViewerComponent;