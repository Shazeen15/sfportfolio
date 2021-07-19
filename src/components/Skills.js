import "./styles/Skills.css";
import html from "./img/html.png";
import css from "./img/css.png";
import bootstrap from "./img/bootstrap.png";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import sass from "./img/sass.png";
import java from "./img/java.png";
import ruby from "./img/ruby.png";
import bulma from "./img/bulma.png";
import rails from "./img/rails.png";
import sql from "./img/sql.png";
import postgresql from "./img/postgresql.png";
import redux from "./img/redux.png";
import jest from "./img/jest.png";

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
              <img src={javascript} alt="javascript" className="skill " />
              <img src={react} alt="react" className="skill " />
              <img src={redux} alt="react" className="skill " />
              <img src={sass} alt="sass" className="skill " />
              <img src={bootstrap} alt="bootstrap" className="skill " />
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
              <img src={rails} alt="ruby" className="skill " />
              <img src={sql} alt="ruby" className="skill " />
              <img src={postgresql} alt="ruby" className="skill " />
            </p>
          </article>
        </div>
      </div>
      {/* testing */}
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">
              <p>Testing</p>
              <img src={jest} alt="ruby" className="skill " />
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Skills;
