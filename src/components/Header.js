import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Link to="/" className="links">
        About Me
      </Link>
      <Link to="/skills" className="links">
        Skills
      </Link>
      <Link to="/projects" className="links">
        Projects
      </Link>
    </>
  );
}
