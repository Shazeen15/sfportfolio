import html from "./img/html.png";
import css from "./img/css.png";
import bootstrap from "./img/bootstrap.png";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import sass from "./img/sass.png";
function Skills() {
  return (
    <div className="skill">
      <p>My Skills</p>
      <div>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={bootstrap} alt="" />
        <img src={javascript} alt="" />
        <img src={react} alt="" />
        <img src={sass} alt="" />
      </div>
    </div>
  );
}

export default Skills;
