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
          <img src="assets/icons/Vector.svg" alt="" />
          <a href="#about">About Me</a>
        </div>
        <div>
          <img src="assets/icons/Education.svg" alt="" />
          <a href="#edu">Education</a>
        </div>
        <div>
          <img src="assets/icons/Experience.svg" alt="" />
          <a href="#exp">Experience</a>
        </div>
        <div>
          <img src="assets/icons/Skills.svg" alt="" />
          <a href="#skills">Skills</a>
        </div>
        <div>
          <img src="assets/icons/Portfolio.svg" alt="" />
          <a href="#portfoliio">Portfolio</a>
        </div>
        <div>
          <img src="assets/icons/Vector (1).svg" alt="" />
          <a href="#contacts">Contacts</a>
        </div>
        <div>
          <img src="assets/icons/Feedbacks.svg" alt="" />
          <a href="#feedback">Feedback</a>
        </div>
        <div className="go_back">
          <a href="#">&lt; Go back</a>
        </div>
      </nav>
    </div>
  );
}
