import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
// Logic starts here

function Home({ notes, deleteNotesToList }) {
  const handleDelete = (id) => {
    console.log(`Delete is clicked with id ${id}`);
    // Add logic to delete the note with the given id

    deleteNotesToList(id);
  };

  return (
    <div className="home">
      <h1 className="notesListHeading">Your Notes</h1>
      {notes.map((notes) => (
        <div className="notesContainer" key={notes.id}>
          <div className="notesList">
            <div className="notesTitle">{notes.title}</div>
            <div className="notesTime">{notes.id}</div>
            <FaDeleteLeft
              className="notesDelete"
              onClick={() => handleDelete(notes.id)}
            />
          </div>
          <div className="notesDesc">{notes.body}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
