import React from 'react'
export default class Port extends React.Component{
    render(){
        return (
             <div className="col-sm-4">
                        <div className="thumbnail">
                            <img src={this.props.Data.image} alt={port.name} width="400" height="300" />
                            <p><strong>{this.props.Data.name}</strong></p>
                            <p>{this.props.Data.description}</p>
                        </div>
            </div>
        )
    }
}