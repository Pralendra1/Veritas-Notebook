import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
// Logic starts here

function Home({ notes, deleteNotesToList }) {
  return (
    <div className="home">
      <h1 className="notesListHeading">Your Notes</h1>
      {notes.map((notes) => (
        <div className="notesContainer" key={notes._id}>
          <div className="notesList">
            <div className="notesTitle">{notes.title}</div>
            <div className="notesTime">{notes.id}</div>
            <FaDeleteLeft className="notesDelete" />
          </div>
          <div className="notesDesc">{notes.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
