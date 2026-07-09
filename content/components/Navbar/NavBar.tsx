import { ContactsIcon } from "./icons/ContactIcon";
import { EducationIcon } from "./icons/EduIcon";
import { ExperienceIcon } from "./icons/ExpIcon";
import { FeedbackIcon } from "./icons/FeedbackIcon";
import { PortfolioIcon } from "./icons/PortIcon";
import { SkillsIcon } from "./icons/SkillsIcon";
import { UserIcon } from "./icons/UserIcon";
import "./navbar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <div className=" avatarANDname">
        <img className="nav_menu" src="assets/icons/Menu.png" alt="" />
        <img className="nav_avatar" src="assets/user_avatar.png" alt="" />
        <p className="nav_name">John Doe</p>
      </div>
      <nav>
        <div>
          <UserIcon></UserIcon>
          <a href="#about">About Me</a>
        </div>
        <div>
          <EducationIcon></EducationIcon>
          <a href="#edu">Education</a>
        </div>
        <div>
          <ExperienceIcon></ExperienceIcon>
          <a href="#exp">Experience</a>
        </div>
        <div>
          <SkillsIcon></SkillsIcon>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <PortfolioIcon></PortfolioIcon>
          <a href="#portfoliio">Portfolio</a>
        </div>
        <div>
          <ContactsIcon></ContactsIcon>
          <a href="#contacts">Contacts</a>
        </div>
        <div>
          <FeedbackIcon></FeedbackIcon>
          <a href="#feedback">Feedback</a>
        </div>
        <div className="go_back">
          <a href="#">&lt; Go back</a>
        </div>
      </nav>
    </div>
  );
}
