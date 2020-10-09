import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import "./App.css";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Router path="/">
                <Chat />
              </Router>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
