const BASE_URL = `http://localhost:3000/api/v1`;

export const Auction = {
  //short for for writing methods with a =n object
  index() {
    //long form would have been index: () => {}
    return (
      fetch(`${BASE_URL}/auctions`)
        //by default fetch is a GET request
        //we know the path because we built the backend
        //but if we are using external API's, it it the
        //developer of the API's responsibility to share the path with its users

        //fetch will always return a promise, and promise will
        //always return a response object, and the response object
        //just represents the response.  We want the data of the actual response
        .then((res) => {
          console.log(res);
          return res.json();
          //normally we want it in some sort of text format, but now we want it in json
          //res object has a method .json() that will parse the body of res into json format
        })
    );
  },

  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      credentials: "include", //need this for cookies
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  show(id) {
    return fetch(`${BASE_URL}/auctions/${id}`).then((res) => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
  },
};

export const Bid = {
  create(params, id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "POST",
      credentials: "include", //need this for cookies
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
};

//Sign In AJAX helper
export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include", //need this for cookies to be allowed to be sent cross-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  currentUser() {
    return fetch(`${BASE_URL}/current_user`, {
      credentials: "include", // We need to include a session in a request so we can fetch that particular user
    }).then((res) => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => res.json());
  },
};

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include",
    }).then((res) => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: params }),
    }).then((res) => res.json());
  },
};
