import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebarroom.css";
import db from "./firebase";
import { Avatar } from "@material-ui/core";
function SidebarRooms({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessage(
            snapshot.docs.map((doc) => {
              doc.data();
            })
          );
        });
      console.log(true);
    }
    console.log(message);
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("s'il vous plait entree le nom de discussion");
    if (roomName) {
      // insert new room to database
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar_room">
        {/* <div className="left_side"> */}
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
        {/* </div> */}
        <div className="room_content">
          <h5>{name}</h5>
          <p>{message[0]?.message}</p>;
        </div>
        <div className="room_date">12:00</div>
      </div>
    </Link>
  ) : (
    <div className="sidebar_room" onClick={createChat}>
      <h3>nouveau discussion</h3>
    </div>
  );
}
export default SidebarRooms;
