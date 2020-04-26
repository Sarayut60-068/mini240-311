import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Start from './components/Start';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import fire from './firebasa/fire'

import Fooditem from './components/Fooditem';
import contact from './components/contact';
import Reviews from './components/Reviews';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  render() {
    if (this.state.user == null) {
      return (
        <div>
          <LoginPage />
          
        </div>
      );
    }
    return (
      <div>
        <div>
          <Route exact path="/" component={Start} />
          <Route path="/login" component={LoginPage} />
          <Route path="/Fooditem" component={Fooditem} />
          <Route path="/contact" component={contact} />
          <Route path="/Reviews" component={Reviews} />
        </div>
      </div>


    )
  }
}
export default App


