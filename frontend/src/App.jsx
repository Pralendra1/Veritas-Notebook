import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddNotesList from "./components/AddNotesList";
import { useState } from "react"; // Update the path

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const [dummyNotes, setDummyNotes] = useState([]);

  const addNotesToList = (newElement) => {
    setDummyNotes([newElement, ...dummyNotes]);
  };

  const deleteNotesToList = (id) => {
    setDummyNotes(dummyNotes.filter((notes) => notes.id !== id));
  };

  return (
    <div className="main">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Home" ? (
        <Home notes={dummyNotes} deleteNotesToList={deleteNotesToList} />
      ) : selectedTab === "AddNotes" ? (
        <AddNotesList addNotesToList={addNotesToList} />
      ) : null}
    </div>
  );
}

export default App;
