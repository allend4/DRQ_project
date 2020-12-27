import React from 'react';
import '../App.css';
import axios from 'axios'; // utils/API.js - axios config

export class Edit extends React.Component{

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeRecipeName = this.onChangeRecipeName.bind(this); // bind when called, has this keyword set to the provided value
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this); // bind when called, has this keyword set to the provided value
        this.onChangeRecipeImage = this.onChangeRecipeImage.bind(this); // bind when called, has this keyword set to the provided value

        this.state = { // store property values that belongs to the component
            rName:'',
            rIngredients:'',
            rImage:''
        }
    }// END constructor

    onChangeRecipeName(e){
        this.setState({rName: e.target.value}); //update method and invoke state
    }// END onChangeRecipeName

    onChangeRecipeIngredients(e){
        this.setState({rIngredients: e.target.value}); //update method and invoke state
    }// END onChangeRecipeIngredients

    onChangeRecipeImage(e){
        this.setState({rImage: e.target.value}); //update method and invoke state
    }// END onChangeRecipeImage

    
    componentDidMount(){ // can call setState - update state
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/api/recipes/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                _id: response.data._id,
                rName: response.data.rName,
                rIngredients: response.data.rIngredients,
                rImage: response.data.rImage
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

    onSubmit(){ // event occurs when a form is submitted
        alert('Recipe added' // alert pops up with Recipe rName, rIngredients and rImage
        + '\nName:  ' + this.state.rName
        + '\nIngredients: ' + this.state.rIngredients 
        + '\nImage: ' + this.state.rImage);

        const newRecipe = { // newRecipe object - watch capitals/lowercase
            rName: this.state.rName,
            rIngredients: this.state.rIngredients,
            rImage: this.state.rImage
        }

        axios.put('http://localhost:4000/api/recipes/' + this.state._id, newRecipe) // put request - used to update an existing resource
        .then((res) => {
            console.log(res.data);
        })
        .catch();

    }// END onSubmit

    render(){ // method of react - tells react what to display
        return( //output of the method
            <div>
                <h3>Hello from create component</h3> 
                <form onSubmit={this.onSubmit}> {/* form used to collect user input*/}
                
                    <div className="form-group">
                        <label>Please add Recipe Name</label>
                        <input type="text" className="form-control" value={this.state.rName} onChange={this.onChangeRecipeName}></input> 
                    </div> {/* form-control - Bootstrap’s form styles */}

                    <div className="form-group">
                        <label>Please add Recipe Ingredients</label>
                        <input type="text" className="form-control" value={this.state.rIngredients} onChange={this.onChangeRecipeIngredients}></input>
                    </div> {/* value attribute of a text field */}
                
                    <div className="form-group">
                        <label>Please add Recipe Image</label>
                        <input type="text" className="form-control" value={this.state.rImage} onChange={this.onChangeRecipeImage}></input>
                    </div> {/* onchange event occurs when the value of an element has been changed */}

                    <input type="submit" value="Edit Recipe"></input>
                </form>
            </div>
        );// END return
    }// END render
}// END create class