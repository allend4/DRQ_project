import React from 'react';
import '../App.css';
import axios from 'axios'; // utils/API.js - axios config
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; // import button from bootstrap

export class Add extends React.Component{

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeRecipeName = this.onChangeRecipeName.bind(this); // bind when called, has this keyword set to the provided value
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this); // bind when called, has this keyword set to the provided value
        this.onChangeRecipeInstructions = this.onChangeRecipeInstructions.bind(this); // bind when called, has this keyword set to the provided value
        this.onChangeRecipeImage = this.onChangeRecipeImage.bind(this); // bind when called, has this keyword set to the provided value

        this.state = { // store property values that belongs to the component
            rName:'',
            rIngredients:'',
            rInstructions:'',
            rImage:''
        }
    }// END constructor

    onChangeRecipeName(e){
        this.setState({rName: e.target.value}); //update method and invoke state
    }// END onChangeRecipeName

    onChangeRecipeIngredients(e){
        this.setState({rIngredients: e.target.value}); //update method and invoke state
    }// END onChangeRecipeIngredients

    onChangeRecipeInstructions(e){
        this.setState({rInstructions: e.target.value}); //update method and invoke state
    }// END onChangeRecipeInstructions

    onChangeRecipeImage(e){
        this.setState({rImage: e.target.value}); //update method and invoke state
    }// END onChangeRecipeImage

    onSubmit(){ // event occurs when a form is submitted
        alert('Recipe added' // alert pops up with Recipe rName, rIngredients and rImage
        + '\nName:  ' + this.state.rName
        + '\nIngredients: ' + this.state.rIngredients 
        + '\nInstrcutions: ' + this.state.rInstructions
        + '\nImage: ' + this.state.rImage);

        const newRecipe = { // newRecipe object
            rName: this.state.rName,
            rIngredients: this.state.rIngredients,
            rInstructions: this.state.rInstructions,
            rImage: this.state.rImage
        }

        axios.post('http://localhost:4000/api/recipes', newRecipe) // read data/send object to server
        .then((res) => {
            console.log(res); // responce
        })
        .catch((err) => {
            console.log(err); // error
        });

    }// END onSubmit

    render(){ // method of react - tells react what to display
        return( //output of the method
            <div>
                <h3>Add a recipe</h3> 
                <form onSubmit={this.onSubmit}> {/* form used to collect user input*/}   
                    <div className="form-group">
                        <label>Please name recipe</label>
                        <input type="text" className="form-control" value={this.state.rName} onChange={this.onChangeRecipeName}></input> 
                    </div> {/* form-control - Bootstrap’s form styles */}
                    <div className="form-group">
                        <label>Please add recipe ingredients</label>
                        <textarea  type="text" className="form-control" rows="3" value={this.state.rIngredients} onChange={this.onChangeRecipeIngredients}></textarea >
                    </div> {/* value attribute of a text field */}
                    <div className="form-group">
                        <label>Please add recipe instructions</label>
                        <textarea  type="text" className="form-control" rows="3" value={this.state.rInstructions} onChange={this.onChangeRecipeInstructions}></textarea >
                    </div> {/* value attribute of a text field */}   
                    <div className="form-group">
                        <label>Please add recipe picture</label>
                        <input type="text" className="form-control" value={this.state.rImage} onChange={this.onChangeRecipeImage}></input>
                    </div> {/* onchange event occurs when the value of an element has been changed */}
                    <Button variant="outline-info" type="submit">Add Recipe</Button>
                </form>
            </div>
        );// END return
    }// END render
}// END Add class