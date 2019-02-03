import React, { Component } from 'react';
import {Route} from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route exact path="/" component={<LandingPageView/>}/>
        <Route path="/login" component={<LoginView/>}/>
        <Route path="/newsfeed" component={<NewsFeedView/>}/>
        <Route path="/user/:id" component={<UserProfileView/>}/>


      </div>
    );
  }
}

export default App;
