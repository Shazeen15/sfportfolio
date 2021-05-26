import html from "./img/html.png";
import css from "./img/css.png";
import bootstrap from "./img/bootstrap.png";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import sass from "./img/sass.png";
import java from "./img/java.png";
import ruby from "./img/ruby.png";
import python from "./img/python.png";

import "./Skills.css";
function Skills() {
  return (
    <div className="skill">
      <h2>My Skills</h2>
      <div>
        <img src={html} alt="html" className="skills" />
        <img src={css} alt="css" className="skills" />
        <img src={bootstrap} alt="bootstrap" className="skills" />
        <img src={javascript} alt="javascript" className="skills" />
        <img src={react} alt="react" className="skills" />
        <img src={sass} alt="sass" className="skills" />
        <img src={java} alt="java" className="skills" />
        <img src={ruby} alt="ruby" className="skills" />
        <img src={python} alt="python" className="skills" />
      </div>
    </div>
  );
}

export default Skills;
