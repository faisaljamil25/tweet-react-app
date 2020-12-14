import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({
  name,
  setName,
  tweets,
  setTweets,
  textInput,
  setTextInput,
}) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const userNameInput = (e) => {
    setName(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { id: uuidv4(), Name: name, messege: textInput }]);
    setTextInput("");
    setName("");
  };

  return (
    <form autoComplete="off" onSubmit={submitTweetHandler}>
      <input
        onInput={userNameInput}
        value={name}
        type="text"
        placeholder="Name"
      />
      <textarea
        onInput={userInputHandler}
        value={textInput}
        cols="50"
        rows="10"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
