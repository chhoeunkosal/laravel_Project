import React from 'react';
import About from '../Pages/About';
import Service from '../Pages/Service';
import {Switch, Route} from 'route'
export default class Content extends React.Component{
    render(){
        return (
            
            <Switch>
                <Route>
                    <Route exact part="services" component={Service}/>
                    <Route part="about" component={About}/>
                </Route>
            </Switch>
        )
    }
}