import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/" exact={true} component={HomePage}/>

        </Switch>
    </div>
  );
}

export default App;
