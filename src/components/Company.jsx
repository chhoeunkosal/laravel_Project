import React from 'react'

export default class Company extends React.Component{
    render(){
        return (
            <div className="jumbotron text-center">
                <h1>{this.props.Name}</h1>
                <p>{this.props.Vision}</p>
                <form className="form-inline">
                    <div className="input-group">
                        <input type="email" className="form-control" size="50" placeholder="Email Address" required=""/>
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-danger">Subscribe</button>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}