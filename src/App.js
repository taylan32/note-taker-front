import Navi from "./components/navi/Navi";
import Dashboard from "./components/root/Dashboard";
import "./assets/style/resetcss.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNote from "./pages/AddNote/AddNote";
function App() {
  return (
    <div>
    <Navi />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-note" element={<AddNote />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
