import React, { Component } from "react";
import NewAuctionForm from "./NewAuctionForm";
import { Auction } from "../requests";

class NewAuctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createAuction = this.createAuction.bind(this);
  }
  // Because NewQuestionPage is being renderd by a Route component provided by React-Router-Dom
  // It will recieve the history, location, and match properties
  createAuction(params) {
    Auction.create(params).then((auction) => {
      if (auction.errors) {
        this.setState({ errors: auction.errors });
      } else {
        // const id = question.id;
        // the history prop contains methods used to navigate
        this.props.history.push(`/auctions/${auction.id}`);
      }
    });
  }

  render() {
    return (
      <div>
        <NewAuctionForm
          createAuction={this.createAuction}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default NewAuctionPage;
