
import React, { Component } from "react";
import './Profile.css';
export default class Profile extends Component {
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
              <h1>مركز أبجد للدورات التأهيلية ورياض الأطفال</h1>
              <h4>بالعلم ترتقي الأمم وبالأخلاق تسود</h4>
                  <img  src="/abgd.png" alt=""/>
                  <br/>
                  <br/>
                
                <p> {this.state.counter} </p>
                
               



            </div>
        )
    }







}