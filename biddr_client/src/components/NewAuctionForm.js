import React from "react";

const NewAuctionForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get("title"),
      body: formData.get("body"),
      price: formData.get("price"),
    };
    props.createAuction(params);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" id="title" />
        <br />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea name="body" id="body" />
        <br />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <textarea name="price" id="price" />
        <br />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default NewAuctionForm;
