const express = require('express')
const app = express()
const port = 4000 // changed as react uses 3000
const cors = require('cors'); // cors need installing and will allow script to request data off server
const bodyParser = require("body-parser") // // body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.bod
const mongoose = require('mongoose'); // getting-started.js mongoose

// cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// connect to MongoDB database
const strMongoDB = 'mongodb+srv://admin:admin@cluster0.eozna.mongodb.net/myrecipes?retryWrites=true&w=majority'; //connect to cluster MongoDB
mongoose.connect(strMongoDB, { useNewUrlParser: true }); // connect to database

const Schema = mongoose.Schema; // schema

const recipeSchema = new Schema({  // type of schema
    rName: String,
    rIngredients: String,
    rImage: String
}) // what doscuments in database will look like

const recipeModel = mongoose.model("recipe", recipeSchema); // data model schemanode

app.get('/api/recipes', (req, res) => { // GET method

    recipeModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/api/recipes/:id', (req, res) => {
    console.log(req.params.id); // log id to console

    recipeModel.findById(req.params.id, (err, data) => {  // take id and search database
        res.json(data); // send data back
    })
})

app.put('/api/recipes/:id', (req, res) => {
    console.log("Update: " + req.body);

    recipeModel.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        res.send(data);
    })
})

app.delete('/api/recipes/:id', (req, res) => {
    console.log(req.params.id); // log id

    recipeModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err)
            res.send(err);
        res.send(data);
    })
})

app.post('/api/recipes', (req, res) => { // POST method
    console.log(req.body);

    recipeModel.create({ // create new record in database
        rName: req.body.rName,
        rIngredients: req.body.rIngredients,
        rImage: req.body.rImage
    })
    .then(() => {
        res.send('item created')
    })
    .catch();
})

app.listen(port, () => { // app listen at port 4000. used to bind and listen the connections on the specified host and port
    console.log(`Example app listening at http://localhost:${port}`)
})