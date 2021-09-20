import * as React from "react";

interface Props {
  title: string;
  desc: string;
  tech: string[];
  link: string;
}

function ProjectInfo({title, desc, tech, link}: Props) {
  return (
    <div className="row text-light">
      <div className="col-sm-2"><i className="bi bi-file-earmark-code fs-2"/><strong> {title}</strong>
      </div>
      <div className="col-sm-7">{desc}</div>
      <small className="col-sm-2 text-muted">{tech.join(", ")}</small>
      <a
        href={link}
        className="col-sm-1 btn btn-primary rounded-pill bg-light text-dark text-muted mb-auto p-2"
        role="button"
      >
        <i className="bi bi-github"/> Link
      </a>
    </div>
  );
}

export default ProjectInfo;
