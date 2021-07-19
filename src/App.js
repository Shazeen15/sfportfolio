import me from "./components/img/shaz.png";
import "./styles/App.css";

import { Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Header from "./components/Header";

function App() {
  return (
    <>
      <section className="app">
        <nav>
          <Header />
        </nav>
        <section className="con-2">
          <div className="myname-img">
            <div>
              <h1 className="my-name-title">Shazeen Fabius</h1>
              <p className="subtitle">Software Engineer</p>
            </div>
            <img src={me} alt="" className="me" />
          </div>
          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </section>
      </section>
      <footer>
        <Connect />
      </footer>
    </>
  );
}

export default App;
