import React from "react";

const Tweet = ({ tweet }) => {
  return (
    <div>
      <h2>Name</h2>
      <h2>{tweet}</h2>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
