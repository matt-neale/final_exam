import React from "react";

const NewBidForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      price: formData.get("price"),
      created_at: formData.get("created_at"),
    };
    props.createBid(params);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="price"></label>
        <textarea
          name="price"
          id="price"
          placeholder="How much would you like to bid?"
        />
        <br />
      </div>

      <div>
        <input type="submit" value="Bid" />
      </div>
    </form>
  );
};

export default NewBidForm;
