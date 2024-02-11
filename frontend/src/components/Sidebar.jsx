import { useState } from "react";
import { PiPencilCircle } from "react-icons/pi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuUserCircle2 } from "react-icons/lu";
import axios from "axios";

function Sidebar({ selectedTab, setSelectedTab }) {
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
          }}
        />
        <IoMdAddCircleOutline
          className="taskButton"
          onClick={() => {
            setSelectedTab("AddNotes");
          }}
        />
        <LuUserCircle2 className="taskButton" />
      </div>
    </div>
  );
}

export default Sidebar;
