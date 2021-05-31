import React from "react";

function BidDetails({ price, bidder, created_at, id, deleteBid }) {
  return (
    <div>
      <p
        style={{
          fontStyle: "Roboto",
          fontSize: "12px",
        }}
      >
        {price}
      </p>
      <div>
        <small>By {bidder ? bidder.full_name : null}</small>
        <small style={{ marginLeft: "20px" }}>Bid made {created_at} ago</small>
      </div>
      <button onClick={() => deleteBid(id)}>Delete</button>
    </div>
  );
}

export default BidDetails;
