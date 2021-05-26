import me from "./components/img/shaz.png";
import "./App.css";

import { Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/" className="links">
          Connect With Me
        </Link>
        <Link to="/about" className="links">
          About Me
        </Link>
        <Link to="/skills" className="links">
          Skills
        </Link>
        <Link to="/projects" className="links">
          Projects
        </Link>
      </nav>
      <section>
        <div className="myname-img">
          <h1 className="my-name-title">Shazeen Fabius</h1>
          <img src={me} alt="" className="me" />
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
      </section>
    </div>
  );
}

export default App;
