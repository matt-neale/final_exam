import React from "react";

function AuctionDetails({ title, body, creator, price, created_at }) {
  return (
    <div>
      <h2>{title}</h2>
      <p
        style={{
          fontStyle: "Roboto",
          fontSize: "24px",
        }}
      >
        {body}
      </p>
      <p>By: {creator ? creator.full_name : null}</p>
      <p>Current Price: {price}</p>
      <div>
        <small style={{ marginLeft: "20px" }}>Posted: {created_at} ago</small>
      </div>
    </div>
  );
}

export default AuctionDetails;
