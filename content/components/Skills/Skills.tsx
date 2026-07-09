import { Scale } from "./scale";
import "./skills.css";

export function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <div className="chart">
        <div className="html">
          <div>HTML</div>
        </div>
        <div className="css">
          <div>CSS</div>
        </div>
        <div className="jquerry">
          <div>jQuerry</div>
        </div>
        <div className="php">
          <div>PHP</div>
        </div>
        <div className="laravel">
          <div>Laravel 2</div>
        </div>
      </div>
      <div className="mastery">
        <Scale></Scale>
      </div>
    </div>
  );
}
