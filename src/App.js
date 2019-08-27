import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/layouts/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Bikes from "./components/pages/Bikes";
import BikeView from "./components/Bike/BikeView";
import AdminDash from "./components/Admin/AdminDash";
import CreateBike from "./components/Admin/CreateBike";
import ManageBikes from "./components/Admin/ManageBikes";
import EditBike from "./components/Admin/EditBikeView";
import SignIn from "./components/layouts/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <header className="App-header">
          <Switch>
            {/* PUBLIC PAGES */}
            <Route exact path="/" component={Home} />
            <Route path="/bikes" component={Bikes} />
            {/* <Route path="/contact" component={Contact} /> */}
            <Route path="/about" component={About} />
            <Route path="/bikeview/:id" component={BikeView} />
            <Route path="/signin" component={SignIn} />

            {/* ADMIN PAGES */}
            <Route exact path="/admin" component={AdminDash} />
            <Route path="/admin/createBike" component={CreateBike} />
            <Route path="/admin/manageBikes" component={ManageBikes} />
            <Route path="/admin/editBike/:id" component={EditBike} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
