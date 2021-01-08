import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css"
 
import Home from './components/Home';
import Game from './components/Game';
import Error from './components/Error';
import Navigation from './components/Navigation';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter id="root">
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/game" component={Game}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
