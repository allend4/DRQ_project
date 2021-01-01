import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' // import button from bootstrap 
import axios from 'axios' // http client
import {Link} from 'react-router-dom' // create a link between pages
import ScrollToTop from './scrollToTop';

export class RecipeDetails extends React.Component {

    constructor() {
        super(); // invoked super
        this.DeleteRecipe = this.DeleteRecipe.bind(this); // bind
    }

    DeleteRecipe(e) { // delete method
        e.preventDefault(); // prevents getting fired everytime
        axios.delete('http://localhost:4000/api/recipes/' + this.props.recipe._id) // http request
            .then(() => { // callback function
                this.props.ReloadData(); // invoke
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {/* bootstrap card */}
                <Card className="card bg-light mb-3"> 
                    <Card.Header>{this.props.recipe.rName}</Card.Header> {/* props how you pass data from one comp to another */}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.recipe.rImage} width="640" height="360" alt="food"></img>
                            <ul className="list-group list-group-flush">
                                <h5 class="card-title">Ingredients</h5>
                                <li className="list-group-item">{this.props.recipe.rIngredients}</li>
                                <h5 class="card-title">Instructions</h5>
                                <li className="list-group-item">{this.props.recipe.rInstructions}</li>
                            </ul>
                        </blockquote>
                        <Button variant="danger" onClick={this.DeleteRecipe}>Delete</Button> &nbsp; 
                        <Link to={"/edit/" + this.props.recipe._id} className="btn btn-warning" > Edit </Link> &nbsp;
                        <ScrollToTop></ScrollToTop>
                    </Card.Body> {/* Button / Link moved inside card to stop buttons expanding the screen*/}
                </Card>
                
            </div>
        );// END return
    }// END render
}// END class recipeDetails