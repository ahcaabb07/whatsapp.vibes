import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarRooms from "./SidebarRooms";
import db from "./firebase";
import "./sidebar.css";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="left_header">
          <Avatar src={user?.photoURL} />
        </div>
        <div className="right_header">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="search_container">
        <SearchOutlined />
        <input type="text" placeholder="Serch for..." />
      </div>
      <div className="sidebar_rooms">
        <SidebarRooms addNewChat />
        {rooms.map((room) => {
          return (
            <SidebarRooms key={room.id} name={room.data.name} id={room.id} />
          );
        })}
      </div>
    </div>
  );
}
export default Sidebar;
