import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { Toaster } from "sonner";
import "./CSS/style.css";

function App() {
    return (
        <div className="App">
            <Toaster />
            <Navbar />
            <div className="not-nav">
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
