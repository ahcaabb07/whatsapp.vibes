import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AtachFile from "@material-ui/icons/AttachFile";
import InsertEmotIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "../sidebar/firebase";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import "./chat.css";
function Chat() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setroomName(snapshot.data().name);
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    console.log(input);
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_header_info">
          <h6>{roomName}</h6>
          <p>
            vu a{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
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
        {messages.map((msg) => {
          return (
            <p
              className={`chat_message ${
                msg.name === user.displayName && "sender"
              }`}
            >
              <span className="chat_user">{msg.name}</span>
              {msg.message}
              <span className="chat_timestamp">
                {new Date(msg.timestamp?.toDate()).toUTCString()}
              </span>
            </p>
          );
        })}

        {/* <p className={`chat_message ${true && "sender"}`}>
          <span className="chat_user">Youssef</span>
          whats'app asata
          <span className="chat_timestamp">13:00</span>
        </p> */}
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
