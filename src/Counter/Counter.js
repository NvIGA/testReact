import React, {Component} from 'react'
import Auxiliary from '../hoc/Auxiliary'

export default class Counter extends  Component{
    state ={
        counter: 0
    };

    incrementCountHandler = ()=>{
        this.setState({
            counter: this.state.counter + 1
        })
    };

    decrementCountHandler = ()=>{
        this.setState({
            counter: this.state.counter- 1
        })
    };


    render() {
        return(
            <Auxiliary>
                <h2 >Counter: {this.state.counter}</h2>
                <button onClick={this.incrementCountHandler}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter -1})}>-</button>
            </Auxiliary>)

        // return(
        //     <React.Fragment>
        //         <h2 >Counter: {this.state.counter}</h2>
        //         <button  onClick={this.incrementCountHandler}>+</button>
        //         <button  onClick={() => this.setState({counter: this.state.counter -1})}>-</button>
        //     </React.Fragment>
        // )

        // return[
        //
        // ];
    }
}