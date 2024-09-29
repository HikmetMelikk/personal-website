import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MySkills from "./components/MySkills";
import MyWorks from "./components/MyWorks";
import MyWorksCard from "./components/MyWorksCard";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <MyWorks />
            <MyWorksCard />
            <MyWorksCard />
            <MyWorksCard />
            <MyWorksCard />
            <MyWorksCard />
            <AboutMe />
            <MySkills />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
