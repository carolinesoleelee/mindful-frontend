import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import HomePageContainer from "./components/HomePageContainer";
import TimesheetContainer from "./components/TimesheetContainer";
import AnalyticsContainer from "./components/AnalyticsContainer";
import EmotionsContainer from "./components/EmotionsContainer";
import NeedsContainer from "./components/NeedsContainer";
import AllNeedsContainer from "./components/AllNeedsContainer";
import AllEmotionsContainer from "./components/AllEmotionsContainer";
import Navbar from "./components/Navbar";
import Compare from "./components/Compare";

class App extends Component {
  render() {
    return (
        <div>
        <Navbar />
        <Route exact path='/' component={HomePageContainer} />
        <Route exact path='/timesheet' component={TimesheetContainer} />
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

export default App;
