import React, { useState } from "react";
// import components
import CreateTweet from "./components/CreateTweet";

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [textInput, setTextInput] = useState("");
  return (
    <CreateTweet
      tweets={tweets}
      setTweets={setTweets}
      textInput={textInput}
      setTextInput={setTextInput}
    />
  );
};

export default App;
