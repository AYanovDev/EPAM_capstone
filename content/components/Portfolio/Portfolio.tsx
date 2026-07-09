import "./portfolio.css";

export function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="porfolio_nav">
        <p>All</p>
        <p className="slash">/</p>
        <p>Code</p>
        <p className="slash">/</p>
        <p>UI</p>
      </div>
      <div className="projects">
        <div className="project-card">
          <img src="assets/Portfolio cards.png" alt="" />
          <div className="proj_text">
            <p>Some text</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur vero omnis officiis sapiente minus nulla,
              exercitationem aperiam at! Fugit et consequuntur non quo autem
              porro, officiis ad cum rem delectus.
            </p>
            <a href="#">View resource</a>
          </div>
        </div>
        <div className="project-card">
          <img src="assets/Portfolio cards.png" alt="" />
          <div className="proj_text">
            <p>Some text</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur vero omnis officiis sapiente minus nulla,
              exercitationem aperiam at! Fugit et consequuntur non quo autem
              porro, officiis ad cum rem delectus.
            </p>
            <a href="#">View resource</a>
          </div>
        </div>
        <div className="project-card">
          <img src="assets/Portfolio cards.png" alt="" />
          <div className="proj_text">
            <p>Some text</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur vero omnis officiis sapiente minus nulla,
              exercitationem aperiam at! Fugit et consequuntur non quo autem
              porro, officiis ad cum rem delectus.
            </p>
            <a href="#">View resource</a>
          </div>
        </div>
      </div>
    </div>
  );
}
