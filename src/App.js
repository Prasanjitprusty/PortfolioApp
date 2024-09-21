import { BrowserRouter as Router } from "react-router-dom"; // Remove Route and Routes
import Home from "./components/Home";
import Experience from "./pages/exprience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/contactUs";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar /> 
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
