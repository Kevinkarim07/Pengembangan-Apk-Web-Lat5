import React, { Component } from 'react';
import './Input.css'

export default class Input extends Component {
  

    render() {
        return (
            <div className="input">
                <input type="text" name="nama" placeholder="Enter Your Name" onChange={(ev)=>
                 this.props.getValues(ev.target.name,ev.target.value) } />

<input type="text" name="status" placeholder="Enter Your Status" onChange={(ev)=>
                 this.props.getValues(ev.target.name,ev.target.value) } />
            </div>
        );
    }
}