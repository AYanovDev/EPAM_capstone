import { useEffect, useState } from "react";
import { ContactsIcon } from "./icons/ContactIcon";
import { EducationIcon } from "./icons/EduIcon";
import { ExperienceIcon } from "./icons/ExpIcon";
import { FeedbackIcon } from "./icons/FeedbackIcon";
import { PortfolioIcon } from "./icons/PortIcon";
import { SkillsIcon } from "./icons/SkillsIcon";
import { UserIcon } from "./icons/UserIcon";
import "./navbar.css";

export function NavBar() {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 600);

  useEffect(() => {
    function handleResize() {
      setCollapsed(window.innerWidth <= 600);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${collapsed ? "collapsed" : ""}`}>
      <div className=" avatarANDname">
        <img
          className="nav_menu"
          src="assets/icons/Menu.png"
          alt=""
          onClick={() => setCollapsed(!collapsed)}
        />
        <img className="nav_avatar" src="assets/user_avatar.png" alt="" />
        <p className="nav_name">John Doe</p>
      </div>
      <nav>
        <div>
          <a href="#about_me">
            <UserIcon />
            <span>About Me</span>
          </a>
        </div>
        <div>
          <a href="#edu">
            <EducationIcon />
            <span>Education</span>
          </a>
        </div>

        <div>
          <a href="#exp">
            <ExperienceIcon />
            <span>Experience</span>
          </a>
        </div>

        <div>
          <a href="#skills">
            <SkillsIcon />
            <span>Skills</span>
          </a>
        </div>

        <div>
          <a href="#portfolio">
            <PortfolioIcon />
            <span>Portfolio</span>
          </a>
        </div>

        <div>
          <a href="#contacts">
            <ContactsIcon />
            <span>Contacts</span>
          </a>
        </div>

        <div>
          <a href="#feedback">
            <FeedbackIcon />
            <span>Feedback</span>
          </a>
        </div>
        <div className="go_back">
          <a href="/">
            <span className="back_icon">&lt;</span>
            <span className="back_text">Go back</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
