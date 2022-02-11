import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Login } from "./components/login";
import { Logout } from "./components/Logout";
import Navbar from "./components/Navbar";
import { Signup } from "./components/signup";
import AuthState from "./context/authentication/AuthState";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <AuthState>
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </AuthState>
  );
}

export default App;
