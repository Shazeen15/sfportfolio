import me from "./components/img/shaz.png";
import "./App.css";

import { Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <div className="myNamePicture">
        <h1>Shazeen Fabius</h1>
        <img src={me} alt="" />
      </div>
      <Switch>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
