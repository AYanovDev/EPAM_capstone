import { AboutMe } from "./components/About_me/AboutMe";
import { Contacts } from "./components/Contacts/Contacts";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Feedback } from "./components/Feedback/Feedback";
import { NavBar } from "./components/Navbar/NavBar";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Skills } from "./components/Skills/Skills";
import "./global.css";
import "./content.css";

export function Content() {
  return (
    <div className="content_div">
      <div className="navbar_div">
        <NavBar></NavBar>
      </div>
      <div className="data_div">
        <AboutMe></AboutMe>
        <Education></Education>
        <Experience></Experience>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contacts></Contacts>
        <Feedback></Feedback>
      </div>
    </div>
  );
}
