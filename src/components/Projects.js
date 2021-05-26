// import truckTracker from "./img/truckTracker.png";
import "./Projects.css";
function Projects() {
  return (
    <div className="project">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-section">
        {/* food truck project */}
        <a
          className="siteLink"
          href="https://github.com/Food-Truck-Tracker-TT7/frontend"
          target="_blank"
          without
          rel="noreferrer"
        >
          Food Truck Tracker
        </a>
        {/* quiz project */}
        <a
          className="siteLink"
          href="https://github.com/Shazeen15/tandem-trivia-app"
          target="_blank"
          without
          rel="noreferrer"
        >
          Quiz App
        </a>
        {/* nasa page */}
        <a
          className="siteLink"
          href="https://github.com/Shazeen15/nasa-apod"
          target="_blank"
          without
          rel="noreferrer"
        >
          NASA APOD
        </a>
        {/* rick page */}
        <a
          className="siteLink"
          href="https://github.com/Shazeen15/rickandmorty"
          target="_blank"
          without
          rel="noreferrer"
        >
          Rick and Morty Characterer
        </a>

        {/* Potluck */}
        <a
          className="siteLink"
          href="https://github.com/PotluckPlanner-TT7/Frontend"
          target="_blank"
          without
          rel="noreferrer"
        >
          PotLucks
        </a>
      </div>
    </div>
  );
}

export default Projects;
