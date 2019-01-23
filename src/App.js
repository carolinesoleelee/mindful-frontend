import React, { Component } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import Login from './components/Login'
import './App.css';
import TimesheetContainer from "./components/TimesheetContainer";
import AnalyticsContainer from "./components/AnalyticsContainer";
import EmotionsContainer from "./components/EmotionsContainer";
import HomePageContainer from "./components/HomePageContainer";
import NeedsContainer from "./components/NeedsContainer";
import AllNeedsContainer from "./components/AllNeedsContainer";
import AllEmotionsContainer from "./components/AllEmotionsContainer";
import Navbar from "./components/Navbar";
import Compare from "./components/Compare";

class App extends Component {

  constructor(){
   super()
   this.state = {
     currentUser: null,
     loading: true
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3001/profile`, {
        method: "GET",
        headers: {
          "Authentication" : `Bearer ${token}`
        }
      }).then(res => res.json()) //GET fetch
      .then(data => {
        this.setState({
          currentUser: data.user,
          loading: false
        })
      })
    }else{
      this.setState({
        loading: false
      })
    }
  }

  setCurrentUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  render() {
    return (
        <div>
        <Navbar logged_in={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>

       <Route exact path="/login" render={() => this.state.loading ? null : (this.state.currentUser ?
           <Redirect to="/" /> : <Login setCurrentUser={this.setCurrentUser}/> )} />

           <Route exact path='/'render ={() => {
            return ( <HomePageContainer currentUser={this.state.currentUser}/>) }} />

        <Route exact path='/timesheet'render ={() => {
         return ( <TimesheetContainer currentUser={this.state.currentUser}/>) }} />
        <Route exact path='/analytics' component={AnalyticsContainer} />
        <Route exact path='/emotions' component={EmotionsContainer} />
        <Route exact path='/needs' component={NeedsContainer} />
        <Route exact path='/allemotions' component={AllEmotionsContainer} />
        <Route exact path='/allneeds' component={AllNeedsContainer} />
        <Route exact path='/compare' component={Compare} />
        </div>
    );
  }
}

export default withRouter(App);
