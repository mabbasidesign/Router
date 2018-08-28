import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/post" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
