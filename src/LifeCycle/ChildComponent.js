import React, { Component } from 'react'

export default class ChildComponent extends Component {

    constructor(props){
        super(props)
        console.log('constructor child');
        this.state = {
            
        }
    }

    static getDerivedStateFromProps(newState,currentState){
        console.log('getDeriveStateFromProps child');
        return currentState;
    }

    render() {
        console.log('renderChild');
        return (
            <div>
                Child Component
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount child');
    }
    componentDidUpdate(propCu,StateCu){
        console.log('componentDidUpdate child');
    }
}
