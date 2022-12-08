import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

const ChatInput = (props) => {
  const { channelName, channelId } = props;

  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Jake Gyllenhaal",
      avatar:
        "https://i.guim.co.uk/img/media/29038e9c9f014ac49fb58d9ef0a8518522cf7441/0_96_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b78316839adae48c216fced74aaf55f0",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      {channelId ?
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form> : <></>}
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
    width: 60%;
  }

  > form > button {
    display: none !important;
  }
`;
