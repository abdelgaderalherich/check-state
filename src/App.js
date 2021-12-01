import React, { Component } from "react";
import './App.css';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
      

          counter: 0
        }
    }

    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    ali=()=>{
      if (this.state.counter >0){ 
      this.setState({
        counter: this.state.counter - 1
        });
    }
    }

    ahmed = () => {
        this.setState({
            counter: 0
        })

    }



    render() {
        return (
            <div className="abd">
              <h1>Currency Exchange </h1>
                  <img  src="/image.jpg" alt=""/>
                  <br/>
                  
                <button onClick={this.increse}  >+</button>
                <button onClick={this.ali}>-</button>
                <p> {this.state.counter} </p>
                <button onClick={this.ahmed}>reset</button>
               



            </div>
        )
    }







}