import React, { useState } from "react";
// import components
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

const App = () => {
  const [name, setName] = useState("");
  const [tweets, setTweets] = useState([]);
  const [textInput, setTextInput] = useState("");
  return (
    <div>
      <CreateTweet
        name={name}
        setName={setName}
        tweets={tweets}
        setTweets={setTweets}
        textInput={textInput}
        setTextInput={setTextInput}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
};

export default App;
