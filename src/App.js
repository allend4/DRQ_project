import React from 'react';
import './App.css';
import { Content } from './components/content';
import { Add } from './components/add'; // changed from header - calls add
import { Display } from './components/display'; // changed from footer - calls read
import logo2 from './images/plainLogo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Edit } from './components/edit'; // calls edit

class App extends React.Component {

  render() {

    return (

      <Router>

        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src={logo2} alt="logo" height="50" width="50"/> Recipez</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/display">Recipes</Nav.Link>
              <Nav.Link href="/add">Add recipe</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>

          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/add' component={Add} ></Route>
            <Route path='/display' component={Display} ></Route>
            <Route path='/edit/:id' component={Edit}></Route> 
          </Switch>

        </div>

        
      </Router>
    );

  }

}

export default App;
