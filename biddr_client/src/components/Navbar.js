import React from "react";
import { NavLink } from "react-router-dom";
import { Session } from "../requests";

const Navbar = ({ currentUser, onSignOut }) => {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut();
    });
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink> | |
      <NavLink to="/auctions">Auctions</NavLink>| |
      {currentUser ? (
        <>
          {/* <NavLink to="/questions/new">New Question</NavLink>- */}
          <span>Welcome, {currentUser.full_name}</span>-
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <NavLink to="/sign_in">Sign In</NavLink>
          {/* <NavLink to="/sign_up">Sign Up</NavLink> */}
        </>
      )}
    </nav>
  );
};

export default Navbar;
