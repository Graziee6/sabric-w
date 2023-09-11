import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signup" Component={Signup} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
