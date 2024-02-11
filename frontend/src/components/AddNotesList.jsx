import React, { useRef } from "react";
import axios from "axios";

function AddNotesList(props) {
  const titleElement = useRef(null);
  const descElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteTitle = titleElement.current.value;
    const noteDescription = descElement.current.value;

    console.log(
      `The entered title is ${noteTitle} and the description is ${noteDescription}`
    );
    // Create a new element
    const newElement = {
      id: Date.now(), // You can generate the ID as per your requirement
      title: noteTitle,
      body: noteDescription,
    };
    // Call the function passed as prop to add the new element to the list
    props.addNotesToList(newElement);
    // Clear the input field after submission
    titleElement.current.value = "";
    descElement.current.value = "";
  };

  const handleAddNote = () => {
    const noteTitle = titleElement.current.value;
    const noteDescription = descElement.current.value;

    axios
      .post("http://localhost:3000/notes", {
        title: noteTitle,
        description: noteDescription,
      })
      .then(function (response) {
        console.log("Note added successfully");
        //add logic here for updating logic.
      })
      .catch(function (error) {
        console.error("Error adding note:", error);
        // You can handle errors here, such as displaying error messages
      });
  };

  return (
    <div className="home">
      <form action="" className="homeForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="textTitle"
          placeholder="Construct a Title"
          ref={titleElement}
        />
        <textarea
          className="textDesc"
          placeholder="Enter the Description."
          ref={descElement}
        ></textarea>
        <button type="submit" onClick={handleAddNote} className="submitBtn">
          Save Note
        </button>
      </form>
    </div>
  );
}

export default AddNotesList;
