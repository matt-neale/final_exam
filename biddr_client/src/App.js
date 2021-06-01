import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import AuctionIndexPage from "./components/AuctionIndexPage";
import AuctionShowPage from "./components/AuctionShowPage";
import { User } from "./requests";
import SignInPage from "./components/SignInPage";
import NewAuctionPage from "./components/NewAuctionPage";
import AuthRoute from "./components/AuthRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    return User.current().then((user) => {
      // console.log(`USER --->${user}`);
      if (user?.id) {
        this.setState((state) => {
          return { user };
        });
      }
    });
  };

  onSignOut = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar currentUser={this.state.user} onSignOut={this.onSignOut} />
          <Switch>
            <Route
              exact
              path="/sign_in"
              render={(routeProps) => (
                <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
              )}
            />
            <Route exact path="/" component={WelcomePage} />

            <Route exact path="/auctions" component={AuctionIndexPage} />

            <Route path="/auctions/:id" component={AuctionShowPage} />

            <AuthRoute
              // The !! turns something "truthy" or "falsy" to true and false respectively
              isAuthenticated={!!this.state.user}
              exact
              path="/auctions/new"
              component={NewAuctionPage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
