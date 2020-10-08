import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        {/* side bar */}
        <Sidebar />
        {/* chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
