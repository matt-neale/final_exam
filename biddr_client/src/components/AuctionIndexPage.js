import React, { Component } from "react";
import { Auction } from "../requests";
import { Link } from "react-router-dom";

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { auctions: [] };
    // this.createQuestion = this.createAuction.bind(this);
  }

  componentDidMount() {
    Auction.index().then((auctions) => {
      this.setState((state) => {
        return {
          auctions: auctions,
        };
      });
    });
  }

  // createQuestion(params){
  //   this.setState((state) => {
  //     return {
  //       questions: [
  //         ...state.questions,
  //         {
  //           id:  Math.max(...state.questions.map(q => q.id)) + 1,
  //           ...params
  //         },
  //         ...state.questions
  //       ]
  //     }
  //   })
  // }

  deleteAuction(id) {
    this.setState((state) => {
      return {
        auctions: state.auctions.filter((a) => a.id !== id),
      };
    });
  }

  render() {
    return (
      <main>
        <h1>Auctions</h1>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
          }}
        >
          {this.state.auctions.map(({ id, title, created_at }) => (
            <li key={id}>
              <Link to={`/auctions/${id}`}>
                {id} - {title}
              </Link>
              <small>posted on {created_at}</small>
              <button onClick={() => this.deleteAuction(id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default AuctionIndexPage;
