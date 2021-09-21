import * as React from "react";

function Topbar() {
  return (
    <nav className="navbar navbar-light bg-primary">
      <form className="container-fluid justify-content-end">
        <a
          href="https://github.com/lynchdean"
          className="btn btn-primary btn-lg rounded-pill"
          role="button"
        >
          <i className="bi bi-github mr-2"/> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/deanlynch97/"
          className="btn btn-primary btn-lg rounded-pill"
          role="button"
        >
          <i className="bi bi-linkedin mr-2"/> LinkedIn
        </a>
      </form>
    </nav>
  );
}

export default Topbar;
