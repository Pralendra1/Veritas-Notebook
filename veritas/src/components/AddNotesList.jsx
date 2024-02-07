import React, { useState, useRef } from "react";

function AddNotesList(props) {
  const titleElement = useRef(null);
  const descElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteTitle = titleElement.current.value;
    const noteBody = descElement.current.value;

    console.log(
      `The entered title is ${noteTitle} and the description is ${noteBody}`
    );
    // Create a new element
    const newElement = {
      id: Date.now(), // You can generate the ID as per your requirement
      title: noteTitle,
      body: noteBody,
    };
    // Call the function passed as prop to add the new element to the list
    props.addNotesToList(newElement);
    // Clear the input field after submission
    titleElement.current.value = "";
    descElement.current.value = "";
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
        <button type="submit" className="submitBtn">
          Save Note
        </button>
      </form>
    </div>
  );
}

export default AddNotesList;
