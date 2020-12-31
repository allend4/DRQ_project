import React from 'react';
import '../App.css';
import logo from '../images/logo.png';

export class Content extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>Recipez App!</h1>
                <p>A place for everyone to keep your recipes. Built by the people, for the people.
                    Allowing you access to various recipes, edit them and even add your own.
                </p>
                <img src={logo} alt="logo"/>
                <h2>It is {new Date().toLocaleTimeString()}.</h2> {/* Method returns date */}
            </div>
        );// END return
    }// END render
}// END class Content