import Navi from "./components/navi/Navi";
import Dashboard from "./components/root/Dashboard";
import "./assets/style/resetcss.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNote from "./pages/AddNote/AddNote";
import UpdateNote from "./pages/updateNote/UpdateNote";
import NoteDetail from "./pages/NoteDetail/NoteDetail";
function App() {
  return (
    <div>
    <Navi />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/update-note" element={<UpdateNote/>} />
          <Route path="/detail/:id" element = {<NoteDetail/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
