import { PiPencilCircle } from "react-icons/pi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuUserCircle2 } from "react-icons/lu";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="taskbar">
        <PiPencilCircle className="taskButton" />
        <IoMdAddCircleOutline className="taskButton" />
        <LuUserCircle2 className="taskButton" />
      </div>
    </div>
  );
}

export default Sidebar;
