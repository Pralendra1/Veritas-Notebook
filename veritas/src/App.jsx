import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
function App() {
  return (
    <div className="main">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;