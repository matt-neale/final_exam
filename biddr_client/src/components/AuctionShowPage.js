import React, { Component } from "react";
import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";
import NewBidForm from "./NewBidForm";
import { Auction } from "../requests";

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { auction: {} };
    this.deleteBid = this.deleteBid.bind(this);
  }

  componentDidMount() {
    Auction.show(this.props.match.params.id).then((auction) => {
      this.setState((state) => {
        return {
          auction: auction,
        };
      });
    });
  }

  deleteBid(id) {
    this.setState((state) => {
      return {
        bids: state.bids.filter((b) => b.id !== id),
      };
    });
  }

  render() {
    const { title, body, creator, price, created_at } = this.state.auction;
    return (
      <main>
        <AuctionDetails
          title={title}
          body={body}
          creator={creator}
          price={price}
          created_at={created_at}
        />
        <NewBidForm price={price} created_at={created_at} />
        <h2>Previous Bids:</h2>
        <BidList bids={this.state.bids} deleteBid={this.deleteBid} />
      </main>
    );
  }
}

export default AuctionShowPage;
