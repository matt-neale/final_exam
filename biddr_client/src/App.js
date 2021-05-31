import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import AuctionIndexPage from "./components/AuctionIndexPage";
import AuctionShowPage from "./components/AuctionShowPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar currentUser={this.state.user} onSignOut={this.onSignOut} />
          <Switch>
            <Route exact path="/" component={WelcomePage} />

            <Route exact path="/auctions" component={AuctionIndexPage} />

            <Route path="/auctions/:id" component={AuctionShowPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
