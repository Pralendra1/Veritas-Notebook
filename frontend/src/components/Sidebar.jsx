import { useState } from "react";
import { PiPencilCircle } from "react-icons/pi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuUserCircle2 } from "react-icons/lu";
import axios from "axios";

function Sidebar({ selectedTab, setSelectedTab }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addnotes,setaddnotes]=useState("");

  // const handleAddNote =function() {
  //   axios
  //     .post("http://localhost:3000/notes", {
  //       title: title,
  //       description: description
  //     })
  //     .then(function(response) {
  //       console.log("Note added successfully");
  //      //add logic here for updating logic.
  //     })
  //     .catch(function(error) {
  //       console.error("Error adding note:", error);
  //       // You can handle errors here, such as displaying error messages
  //     });
  // };
  const handldisplaynotes=function(){
    axios.get("http://localhost:3000/notes")
      .then((response)=>{
        setaddnotes(response.data.notes);
      })
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="taskbar">
        <PiPencilCircle
          className="taskButton"
          onClick={() => {
            setSelectedTab("Home");
            handldisplaynotes();
          }}
        />
        <IoMdAddCircleOutline
          className="taskButton"
          onClick={() => {
            setSelectedTab("AddNotes");
            //handleAddNote();
          }}
        />
        <LuUserCircle2 className="taskButton" />
      </div>
    </div>
  );
}

export default Sidebar;

