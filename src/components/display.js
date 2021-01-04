import React from 'react';
import { Recipes } from './recipes';
import '../App.css';
import axios from 'axios';

export class Display extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this); // bind
    } // can only pass data from parent to child - need to pass further grandparent to child

    // object state stores data
    state = {
        recipes: []
    };

    //CORS policy blocked. browser stopped request (security) resource on different domain (3000/4000)- NEEDS FIXING
    //Server adjustment - install cors and package to allow access server.js (CORS policy)

    componentDidMount() {
        axios.get('http://localhost:4000/api/recipes') // retrieve data from server
            .then(response => {
                this.setState({ recipes: response.data }) // furfilled path // search changed to mymovies
            })
            .catch(
                (error) => {
                    console.log(error); // statement executed if exception is thrown
                }
            );
    }// END componentDidMount

    ReloadData() { // reload data from database
        axios.get('http://localhost:4000/api/recipes') // retrieve data from server
            .then(response => {
                this.setState({ recipes: response.data }) // furfilled path // search changed to mymovies
            })
            .catch(
                (error) => {
                    console.log(error); // statement executed if exception is thrown
                }
            );
    } // END ReloadData

    /* render HTML*/
    render() {
        return (
            <div>
                <h3>Recipes</h3>
                <Recipes recipes={this.state.recipes} ReloadData={this.ReloadData}></Recipes> {/* passing object recipes. // also passing method ReloadData down*/}
            </div>
        );
    }
}// END class Read