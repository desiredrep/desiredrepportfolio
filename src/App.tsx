import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
    return (
        <main>
            <Navbar />

            <div className="intro-layout">
                <Hero />
                <About />
            </div>

            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}

export default App;