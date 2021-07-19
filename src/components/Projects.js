import "./Projects.css";
import foodtracker from "./projectimg/foodtracker.png";
import trivia from "./projectimg/trivia.png";
import rickmorty from "./projectimg/rickmorty.png";
import potlucks from "./projectimg/potlucks.png";
import nasa from "./projectimg/nasa.png";
import watermyplantbackend from "./projectimg/watermyplantbackend.png";
import react from "./img/react.png";
import java from "./img/java.png";
function Projects() {
  return (
    <div className="projects-component">
      {/* section 1 */}
      <div class="tile is-ancestor">
        {/* food truck project */}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <a
              className="siteLink title"
              href="https://github.com/Food-Truck-Tracker-TT7/frontend"
              target="_blank"
              without
              rel="noreferrer"
            >
              Food Truck Tracker
              <figure class="image">
                <img src={foodtracker} alt="foodtracker project" />
              </figure>
              <img src={react} alt="" className="subtitle" />
            </a>
          </div>
        </div>
        {/* trivia project */}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <a
              className="siteLink title"
              href="https://github.com/Shazeen15/trivia-2021"
              target="_blank"
              without
              rel="noreferrer"
            >
              Trivia App
              <figure class="image">
                <img src={trivia} alt="trivia project" />
              </figure>
              <img src={react} alt="" className="subtitle" />
            </a>
          </div>
        </div>
        {/* nasa page */}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <a
              className="siteLink title"
              href="https://github.com/Shazeen15/nasa-apod"
              target="_blank"
              without
              rel="noreferrer"
            >
              NASA APOD
              <figure class="image">
                <img src={nasa} alt="nasa project" />
              </figure>
              <img src={react} alt="" className="subtitle" />
            </a>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div class="tile is-ancestor">
        {/* rick page */}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <a
              className="siteLink title"
              href="https://github.com/Shazeen15/rickandmorty"
              target="_blank"
              without
              rel="noreferrer"
            >
              Rick and Morty Characterer
              <figure class="image is-4by3">
                <img src={rickmorty} alt="rickmorty project" />
              </figure>
              <img src={react} alt="" className="subtitle" />
            </a>
          </div>
        </div>
        {/* Potluck */}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <a
              className="siteLink title"
              href="https://github.com/PotluckPlanner-TT7/Frontend"
              target="_blank"
              without
              rel="noreferrer"
            >
              PotLucks
              <figure class="image is-4by3">
                <img src={potlucks} alt="potlucks project" />
              </figure>
              <img src={react} alt="" className="subtitle" />
            </a>
          </div>
        </div>
        {/* Water my plant */}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <a
              className="siteLink title"
              href="https://github.com/WaterMyPlant1/java-backend"
              target="_blank"
              without
              rel="noreferrer"
            >
              Water my plant
              <figure class="image is-4by3">
                <img src={watermyplantbackend} alt="Water my plant project" />
              </figure>
              <img src={java} alt="" className="subtitle java" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
