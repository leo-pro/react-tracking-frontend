import React, { Component } from 'react';


export default class Form extends Component {

    submitHandler = (event) => {
        event.preventDefault();
        console.log("**** Submit Handler ****");
    }

    render() {
        return (
            <div className="container">
                <h1>React Tracking</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <input type="text" placeholder="Insert your object code" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Track</button>
                </form>
            </div>
        );
    }
}
