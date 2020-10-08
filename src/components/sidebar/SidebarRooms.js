import React, { useEffect, useState } from "react";
import "./sidebarroom.css";
import { Avatar } from "@material-ui/core";
function SidebarRooms({ addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("s'il vous plait entree le nom de discussion");
    if (roomName) {
      // something from database
    }
  };
  return !addNewChat ? (
    <div className="sidebar_room">
      {/* <div className="left_side"> */}
      <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
      {/* </div> */}
      <div className="room_content">
        <h5>Hamza</h5>
        <p>Message content</p>
      </div>
      <div className="room_date">12:00</div>
    </div>
  ) : (
    <div className="sidebar_room" onClick={createChat}>
      <h3>nouveau discussion</h3>
    </div>
  );
}
export default SidebarRooms;
