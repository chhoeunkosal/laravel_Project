import React from 'react'
import Port from './Port'
export default class Portfolio extends React.Component {
    constructor(){
        super()
        this.state = {
            ports:[]
        }
    }
    componentWillMount(){
        this.setState({
            ports:[
                {
                    image:'paris.jpg',
                    name:'Paris',
                    description:'Yes, we built Paris'
                },
                {
                    image:'newyork.jpg',
                    name:'New York',
                    description:'We build New York'

                },
                {
                    image:'sanfran.jpg',
                    name:'San Francisco',
                    description:'Yes, San Fran is ours'

                }
            ]
        })
    }
    render() {

        var ports = this.state.ports.map(port=>{
            return (
               <Port Data={port}/>
            )
        })

        return (
            <div className="container-fluid text-center bg-grey">
                <h2>Portfolio</h2><br />
                <h4>What we have created</h4>
                <div className="row text-center slideanim slide">
                    {ports}
                </div>
            </div>
        )
    }
}