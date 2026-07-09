import { useState } from "react";
import "./portfolio.css";

export function Portfolio() {
  const [hiddenCard, setHiddenCard] = useState<number | null>(null);

  return (
    <div>
      <h2 id="portfolio">Portfolio</h2>

      <div className="porfolio_nav">
        <p
          className={hiddenCard === 0 ? "active" : ""}
          onClick={() => setHiddenCard(0)}
        >
          All
        </p>

        <p className="slash">/</p>

        <p
          className={hiddenCard === 1 ? "active" : ""}
          onClick={() => setHiddenCard(1)}
        >
          Code
        </p>

        <p className="slash">/</p>

        <p
          className={hiddenCard === 2 ? "active" : ""}
          onClick={() => setHiddenCard(2)}
        >
          UI
        </p>
      </div>

      <div className="projects">
        {hiddenCard !== 0 && (
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
        )}

        {hiddenCard !== 1 && (
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
        )}

        {hiddenCard !== 2 && (
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
        )}
      </div>
    </div>
  );
}
