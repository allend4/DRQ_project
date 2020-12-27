import React from 'react';
import '../App.css';

export class Content extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>Cooking App!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2> {/* Method returns date */}
            </div>
        );// END return
    }// END render
}// END class Content