import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
//App Starts here
function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
