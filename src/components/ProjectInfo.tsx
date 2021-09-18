import * as React from "react";
import "./css/projectInfo.css";

interface Props {
  title: string;
  desc: string;
  tech: string[];
  link: string;
}

function ProjectInfo({ title, desc, tech, link }: Props) {
  return (
    <div className="row">
      <div className="col-sm-2 lead">{title}</div>
      <div className="col-sm-6">{desc}</div>
      <div className="col-sm-2">
      <small className="text-muted">{tech.join(", ")}</small>

      </div>
      <div className="col-sm-1 p-0">
        <a
          href={link}
          className="btn btn-primary rounded-pill bg-transparent border-dark p-2"
          role="button"
        >
          <i className="bi bi-github mr-2"></i>
          Link
        </a>
      </div>
    </div>
  );
}

export default ProjectInfo;
