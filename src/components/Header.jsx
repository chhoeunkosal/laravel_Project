import React from 'react'
import Navigation from './Navigation'
import Company from './Company'
export default class Header extends React.Component{
    render(){
        return (
            <div>
                <Navigation/>
                <Company Name="NIS" Vision="Your next solution."/>
            </div>
        )
    }
}