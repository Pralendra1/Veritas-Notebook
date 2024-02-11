import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddNotesList from "./components/AddNotesList";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [dummyNotes, setDummyNotes] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts and whenever selectedTab changes
    handleDisplayNotes();
  }, [selectedTab]); // Dependency on selectedTab ensures the effect runs whenever it changes

  const addNotesToList = (newElement) => {
    setDummyNotes([newElement, ...dummyNotes]);
  };

  const handleDisplayNotes = () => {
    axios
      .get("http://localhost:3000/notes")
      .then((response) => {
        setDummyNotes(response.data.notes);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  };

  return (
    <div className="main">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Home" ? (
        <Home notes={dummyNotes} />
      ) : selectedTab === "AddNotes" ? (
        <AddNotesList addNotesToList={addNotesToList} />
      ) : null}
    </div>
  );
}

export default App;
