import React from 'react';
import '../App.css';
import { RecipeDetails } from './recipeDetails';

export class Recipes extends React.Component {

    render() {
        return this.props.recipes.map((recipe) => { // pulls array (collection )apart to create movie objects
            return <RecipeDetails Key={recipe.imdbID} recipe={recipe} ReloadData={this.props.ReloadData}></RecipeDetails> // RecipeDetails for each movie and pass data // ReloadData - passing down to each grandchild
        });
    } // END render
}// END class Movies 