import { Component } from "react";
import "./CounterApp.css";

export default class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    handelAdd = () => {
        this.setState({count: this.state.count + 1});
    }
    handelSub = () => {
    this.setState({count: this.state.count - 1});
    }
    handelReset = () => {
        this.setState({count: 0});
    }
    
    render (){
        return (
        <>
        <div className="counter">
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>
       
        </div>
        <div className="Btn">
        <button onClick={this.handelAdd}><h3>+</h3></button>
        <button onClick={this.handelSub}><h3>-</h3></button>
        <button onClick={this.handelReset}><h3>Reset</h3></button>
        </div>
        </>
        );
    }
}