import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/layouts/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Bikes from "./components/pages/Bikes";
import BikeView from "./components/Bike/BikeView";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bikes" component={Bikes} />
            {/* <Route path="/contact" component={Contact} /> */}
            <Route path="/about" component={About} />
            <Route path="/bikeview/1" component={BikeView} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
