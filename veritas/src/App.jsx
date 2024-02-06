import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/AddNotesList";
import AddNotesList from "./components/Home";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="main">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Home" ? (
        <Home />
      ) : selectedTab === "AddNotes" ? (
        <AddNotesList />
      ) : null}
    </div>
  );
}

export default App;
