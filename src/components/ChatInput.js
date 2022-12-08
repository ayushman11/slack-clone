import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const ChatInput = (props) => {
  const { channelId } = props;

  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #room-name`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
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
