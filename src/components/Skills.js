import html from "./img/html.png";
import css from "./img/css.png";
import bootstrap from "./img/bootstrap.png";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import sass from "./img/sass.png";
import java from "./img/java.png";
function Skills() {
  return (
    <div className="skill">
      <h2>My Skills</h2>
      <div>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
        <img src={sass} alt="sass" />
        <img src={java} alt="java" />
      </div>
    </div>
  );
}

export default Skills;
