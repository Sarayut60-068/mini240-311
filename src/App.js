import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Start from './components/Start';
// import { Route } from 'react-router-dom';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import fire from './firebasa/fire'

import Fooditem from './components/Fooditem';
import contact from './components/contact';


class App extends Component {

  // firebase.initializeApp({
  //   apiKey: "AIzaSyADl0VGdoA45liNiderICdVjgIxwlSEtLk",
  //   authDomain: "myappjan.firebaseapp.com",
  // })
  
 
  //   state = { isSignedIn: false }
  //   uiConfig = {
  //     signInFlow: "popup",
  //     signInOptions: [
  //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //       firebase.auth.GithubAuthProvider.PROVIDER_ID
        
  //     ],
  //     callbacks: {
  //       signInSuccess: () => false
  //     }
  //   }
  // componentDidMount = () => {
  //     firebase.auth().onAuthStateChanged(user => {
  //       this.setState({ isSignedIn: !!user })
  //       console.log("user", user)
  //     })
  //   }



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
        </div>
      </div>


    )
  }
}
export default App
