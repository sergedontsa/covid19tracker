import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import NewsPage from "./Pages/NewsPage/NewsPage";
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/covid19tracker" component={HomePage}/>
            <Route path="/news" exact={true} component={NewsPage}/>
            <Route path="/about" exact={true} component={AboutPage}/>
        </Switch>
    </div>
  );
}

export default App;
