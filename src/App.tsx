import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MySkills from "./components/MySkills";
import MyWorks from "./components/MyWorks";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <div className="allAboutMe">
                <MyWorks />
                <AboutMe />
                <MySkills />
                <ContactMe />
            </div>
            <Footer />
        </>
    );
}

export default App;
