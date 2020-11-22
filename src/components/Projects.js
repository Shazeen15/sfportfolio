// import truckTracker from "./img/truckTracker.png";
function Projects() {
  return (
    <div>
      <p className="projectTitle">Projects Page!</p>
      {/* <img src={truckTracker} alt="" /> */}
      <div className="con1">
        {/* food truck project */}
        <div className="foodTruck">
          <a
            className="siteLink"
            href="https://food-truck-tracker.vercel.app/login"
            target="_blank"
            without
            rel="noreferrer"
          >
            Food Truck Tracker
          </a>
          <a
            className="githubLink"
            href="https://github.com/Food-Truck-Tracker-TT7/frontend"
            target="_blank"
            without
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        {/* quiz project */}
        <div className="quizApp">
          <a
            className="siteLink"
            href="https://tandem-trivia.herokuapp.com/"
            target="_blank"
            without
            rel="noreferrer"
          >
            Quiz App
          </a>
          <a
            className="githubLink"
            href="https://github.com/Shazeen15/tandem-trivia-app"
            target="_blank"
            without
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        {/* nasa page */}
        <div className="nasa">
          <a
            className="siteLink"
            href="https://nasa-apod-sf.netlify.app/"
            target="_blank"
            without
            rel="noreferrer"
          >
            NASA APOD
          </a>
          <a
            className="githubLink"
            href="https://github.com/Shazeen15/nasa-apod"
            target="_blank"
            without
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        {/* rick page */}
        <div className="rick">
          <a
            className="siteLink"
            href="https://rickmortycharacters-sf.netlify.app/"
            target="_blank"
            without
            rel="noreferrer"
          >
            Rick and Morty Characterer
          </a>
          <a
            className="githubLink"
            href="https://github.com/Shazeen15/rickandmorty"
            target="_blank"
            without
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
