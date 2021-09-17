import * as React from "react";
import DLLogo from "./img/DLLogo.png";
// import GHLogo from "./img/GithubLogo.png";
import LILogo from "./img/LinkedInLogo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Topbar() {
  return (
    <Navbar expand="sm" className="bg-primary">
      <Navbar.Brand href="#home">
        <img src={DLLogo} width="50" height="50" alt="DL icon" />
        {/* <span className="ml-3 text-light">Dean Lynch</span> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto float-right text-right pr-3">
          <Nav.Link href="https://github.com/lynchdean">
            <button type="button" className="btn btn-light text-primary rounded-pill">
              <i className="bi bi-github mr-2"></i>
              GitHub
            </button>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/deanlynch97/">
          <button type="button" className="btn btn-light text-primary rounded-pill">
              <i className="bi bi-linkedin mr-2"></i>
              LinkedIn
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
