import React from "react";
import BidDetails from "./BidDetails";

function BidList(props, deleteBid) {
  const bids = props.bids;
  return (
    <div>
      {bids
        ? bids.map(({ price, bidder, created_at, id }, index) => (
            <BidDetails
              key={index}
              id={id}
              price={price}
              bidder={bidder}
              created_at={created_at.toLocaleString()}
              deleteBid={deleteBid}
            />
          ))
        : null}
    </div>
  );
}

export default BidList;
