import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarRooms from "./SidebarRooms";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="left_header">
          <Avatar />
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
        <SidebarRooms />
        <SidebarRooms />
        <SidebarRooms />
      </div>
    </div>
  );
}
export default Sidebar;
