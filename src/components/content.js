import React from 'react';
import '../App.css';
import logo from '../images/logo.png'; // import logo png
import Timer from 'react-compound-timer' // import timer npm
import { Button } from 'react-bootstrap'; // import from bootstrap

export class Content extends React.Component {
    render() {
        return (// contains logo/ paragraph + timer details
            <div className="App">
                <h1>Recipez App!</h1>
                <p>A place for everyone to keep your recipes. Built by the people, for the people.
                Allowing you access to various recipes, edit them and even add your own.
                </p>
                <img src={logo} alt="logo" />
                <br></br>
                <p>Help with your cooks. You can now keep track of what in the oven.</p>
                <div class="boxed">
                    <Timer startImmediately={false}>
                        {({ start, stop, reset, timerState }) => (
                            <React.Fragment>
                                <div>
                                    <Timer.Hours /> hours &nbsp;
                                    <Timer.Minutes /> minutes &nbsp;
                                    <Timer.Seconds /> seconds
                           </div>
                                <div>{timerState}</div>
                                <br />
                                <div> 
                                    <Button variant="outline-info" onClick={start}>Start</Button>&nbsp;
                                    <Button variant="outline-info" onClick={stop}>Stop</Button>&nbsp;
                                    <Button variant="outline-info" onClick={reset}>Reset</Button>
                                </div>
                            </React.Fragment>
                        )}
                    </Timer>
                </div>
            </div>
        );// END return
    }// END render
}// END class Content