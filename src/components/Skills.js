import html from "./img/html.png";
import css from "./img/css.png";
import bootstrap from "./img/bootstrap.png";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import sass from "./img/sass.png";
import java from "./img/java.png";
import ruby from "./img/ruby.png";
import python from "./img/python.png";
// import bulma from "./img/bulma.png";

import "./Skills.css";
function Skills() {
  return (
    <div className="skills">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">
              <p>Front End</p>
              <img src={html} alt="html" className="skill" />
              <img src={css} alt="css" className="skill " />
              {/* <img src={sass} alt="sass" className="skill " />

              <img src={bootstrap} alt="bootstrap" className="skill " /> */}
              <img src={javascript} alt="javascript" className="skill " />
              <img src={react} alt="react" className="skill " />
              {/* <img src={bulma} alt="bulma" className="skill bulma" /> */}
            </p>
          </article>
        </div>
      </div>
      {/* back end */}
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">
              <p>Back End</p>
              <img src={java} alt="java" className="skill " />
              {/* <p> Spring Boot</p> TODO! */}
              <img src={ruby} alt="ruby" className="skill " />
              {/* <p> Rails</p> TODO! */}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Skills;
