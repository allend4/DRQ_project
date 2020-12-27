import React from 'react';
import './App.css';
import { Content } from './components/content';
import { Create } from './components/create'; // changed from header - calls create
import { Read } from './components/read'; // changed from footer - calls read

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
            <Navbar.Brand href="/">My Cooking App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Recipes</Nav.Link>
              <Nav.Link href="/create">Add recipe</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>

          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/create' component={Create} ></Route>
            <Route path='/read' component={Read} ></Route>
            <Route path='/edit/:id' component={Edit}></Route> 
          </Switch>

          {/*<Header></Header>
        <Content></Content>
        <Footer></Footer>*/}
        </div>

      </Router>
    );

  }

}

export default App;
