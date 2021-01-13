import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css"
 
import Home from './components/Home';
import Game_Gesture from './components/Game_Gesture';
import Game_Mouse from "./components/Game_Mouse";
import Error from './components/Error';
import Navigation from './components/Navigation';

 
export default class App extends Component {
  render() {
    return (      
       <BrowserRouter id="root">
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/game-gesture" component={Game_Gesture}/>
             <Route path="/game-mouse" component={Game_Mouse}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

