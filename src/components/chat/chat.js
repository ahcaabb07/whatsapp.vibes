import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AtachFile from "@material-ui/icons/AttachFile";
import InsertEmotIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import "./chat.css";
function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
    console.log(input);
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h6>Chamber nom</h6>
          <p>vu aujourd'hui a 12:00</p>
        </div>
        <div className="right_chat_header">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AtachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${false && "sender"}`}>
          <span className="chat_user">Hamza</span>
          whats'app asat
          <span className="chat_timestamp">13:00</span>
        </p>
        <p className={`chat_message ${true && "sender"}`}>
          <span className="chat_user">Youssef</span>
          whats'app asata
          <span className="chat_timestamp">13:00</span>
        </p>
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmotIcon />
        </IconButton>
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tapez votre message"
          />
          <button type="submit" value="envoyez" onClick={sendMessage}>
            envoyez
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
