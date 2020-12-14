import React, { useState } from "react";
// import components
import TweetList from "./TweetList";

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");
  };

  return (
    <form autoComplete="off">
      <textarea
        onInput={userInputHandler}
        value={textInput}
        cols="50"
        rows="5"
      ></textarea>
      <button onClick={submitTweetHandler}>Submit</button>
      <TweetList tweets={tweets} />
    </form>
  );
};

export default CreateTweet;
