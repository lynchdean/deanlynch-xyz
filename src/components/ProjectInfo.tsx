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
      <div className="col-sm-3 mb-auto">
        <div className="row">
          <div className="col-sm-2 mb-auto">
            <i className="bi bi-file-earmark-code text-muted fs-3"/>
          </div>
          <div className="col-sm-8">
            <strong>{title}</strong>
          </div>
        </div>
      </div>
      <div className="col-sm-6">{desc}</div>
      <small className="col-sm-2 text-muted">{tech.join(", ")}</small>
      <a
        href={link}
        className="col-sm-1 btn btn-dark rounded-pill bg-dark text-secondary text-muted mb-auto p-2"
        role="button"
      >
        <i className="bi bi-github"/> Link
      </a>
    </div>

  )

}

export default ProjectInfo;
