import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' // import button from bootstrap 
import axios from 'axios' // http client
import {Link} from 'react-router-dom' // create a link between pages

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
                <Card>
                    <Card.Header>{this.props.recipe.rName}</Card.Header> {/* props how you pass data from one comp to another */}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.recipe.rImage} width="200" height="300" alt=" "></img>
                            <footer className="blockquote-footer">
                                {this.props.recipe.rIngredients}
                            </footer>
                        </blockquote>
                        <Button variant="danger" onClick={this.DeleteRecipe}>Delete</Button> 
                        <Link to={"/edit/" + this.props.recipe._id} className="btn btn-primary" > Edit </Link> 
                    </Card.Body> {/* Button / Link moved inside card to stop buttons expanding the screen*/}
                </Card>

            </div>
        );// END return
    }// END render
}// END class recipeDetails